import cloudQiitaDataStore from './cloud-qiita-data-store';
import { IQiitaDataStore } from './qiita-data-store-interface';
import httpClientFactory from '../../../../domain/http-client-factory';
import { IDataStoreFactory } from '../data-store-factory-interface';
import tokenRepository from '../../token-repository';
import tokenDataStoreFactory from '../token/token-data-store-factory';


const qiitaDataStoreFactory: IDataStoreFactory<IQiitaDataStore> = {
  createLocalDataStore: (): IQiitaDataStore => {
    throw new Error('Not Implemented');
  },

  createCloudDataStore: (): IQiitaDataStore => {
    return cloudQiitaDataStore(
      httpClientFactory.createHttpClient,
      tokenRepository(tokenDataStoreFactory),
    );
  },
};

export default qiitaDataStoreFactory;
