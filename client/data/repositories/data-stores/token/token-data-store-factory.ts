import localTokenDataStore from './local-token-data-store';
import cloudTokenDataStore from './cloud-token-data-store';
import { ITokenDataStore } from './token-data-store-interface';
import httpClientFactory from '../../../../domain/http-client-factory';
import { IDataStoreFactory } from '../data-store-factory-interface';


const tokenDataStoreFactory: IDataStoreFactory<ITokenDataStore> = {
  createLocalDataStore: (): ITokenDataStore => {
    return localTokenDataStore();
  },

  createCloudDataStore: (): ITokenDataStore => {
    return cloudTokenDataStore(httpClientFactory.createHttpClient);
  },
};

export default tokenDataStoreFactory;
