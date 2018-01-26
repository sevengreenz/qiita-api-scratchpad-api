import { IQiitaRepository } from '../repositories/qiita-repository-interface';
import qiita, { IApiResponse, IExecuteApi } from '../qiita';
import { IExecutedRepository } from '../repositories/executed-repository-interface';

const qiitaInteractor =
  (qiitaRepository: IQiitaRepository, executedRepository: IExecutedRepository) => {

    return {
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
  };

export default qiitaInteractor;



