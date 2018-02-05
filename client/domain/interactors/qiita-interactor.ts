import qiitaRepository from '../../data/repositories/qiita-repository';
import qiita, { IApiResponse, IExecuteApi } from '../qiita';
import executedRepository from '../../data/repositories/executed-repository';

const qiitaInteractor = {
  /**
   * Qiita API 実行
   */
  executeApi: async (api: IExecuteApi): Promise<IApiResponse> => {
    return await qiitaRepository
      .execute(api.api.method, api.api.href, qiita.removeUndefinedProperty(api.params.dataParams))
      .catch((error) => {
        // TODO: 成功時にセッションから削除
        executedRepository.setExecuted(api);

        return Promise.reject(error);
      });
  },
};

export default qiitaInteractor;



