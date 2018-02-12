import cloudQiitaDataStore from './cloud-qiita-data-store';
import { IQiitaDataStore } from './qiita-data-store-interface';


const qiitaDataStoreFactory = {
  createLocalDataStore: (): IQiitaDataStore => {
    throw new Error('Not Implemented');
  },

  createCloudDataStore: (): IQiitaDataStore => {
    return cloudQiitaDataStore();
  },
};

export default qiitaDataStoreFactory;
