import { IApiResponse } from '../../domain/qiita';
import { IQiitaRepository } from '../../domain/repositories/qiita-repository-interface';
import { IDataStoreFactory } from './data-stores/data-store-factory-interface';
import { IQiitaDataStore } from './data-stores/qiita/qiita-data-store-interface';

const qiitaRepository = (qiitaDataStoreFactory: IDataStoreFactory<IQiitaDataStore>): IQiitaRepository => {
  return {
    execute: async (method, url, params): Promise<IApiResponse> => {
      return await qiitaDataStoreFactory
        .createCloudDataStore()
        .execute(method, url, params);
    },
  };
};

export default qiitaRepository;
