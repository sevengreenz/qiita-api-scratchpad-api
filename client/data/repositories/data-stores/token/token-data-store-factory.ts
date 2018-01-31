import localTokenDataStore from './local-token-data-store';
import cloudTokenDataStore from './cloud-token-data-store';
import { ITokenDataStore } from './token-data-store-interface';


const tokenDataStoreFactory = {
  createLocalDataStore: (): ITokenDataStore => {
    return localTokenDataStore();
  },

  createCloudDataStore: (): ITokenDataStore => {
    return cloudTokenDataStore();
  },
};

export default tokenDataStoreFactory;
