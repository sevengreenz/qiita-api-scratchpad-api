import qiitaRepository from '../../data/repositories/qiita-repository';
import qiita, { IApiResponse, IExecuteApi } from '../qiita';
import executedRepository from '../../data/repositories/executed-repository';

const qiitaInteractor = {
  /**
   * Qiita API 実行
   */
  executeApi: async (api: IExecuteApi): Promise<IApiResponse> => {
    return await qiitaRepository
      .execute(api.api.method, api.api.href, qiita.removeUndefinedProperty(api.params.properties))
      .then((response) => {
        executedRepository.setExecuted(api);

        return Promise.resolve(response);
      });
  },
};

export default qiitaInteractor;



