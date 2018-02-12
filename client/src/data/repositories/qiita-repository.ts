import { IApiResponse } from '../../domain/qiita';
import { IQiitaRepository } from '../../domain/repositories/qiita-repository-interface';
import qiitaDataStoreFactory from './data-stores/qiita/qiita-data-store-factory';

const qiitaRepository: IQiitaRepository = {
  execute: async (method, url, params): Promise<IApiResponse> => {
    return await qiitaDataStoreFactory
      .createCloudDataStore()
      .execute(method, url, params);
  },
};

export default qiitaRepository;
