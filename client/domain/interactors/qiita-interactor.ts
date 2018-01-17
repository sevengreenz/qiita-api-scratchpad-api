import { IQiitaRepository } from '../repositories/qiita-repository-interface';
import { IApiResponse } from '../qiita';

const qiitaInteractor =
  (qiitaRepository: IQiitaRepository) => {

    return {
      /**
       * Qiita API 実行
       */
      executeApi: async (method: string, url: string, params: object): Promise<IApiResponse> => {
        return await qiitaRepository.execute(method, url, params);
      },
    };
  };

export default qiitaInteractor;



