import localExecutedDataStore from './local-executed-data-store';
import { IExecutedDataStore } from './executed-data-store-interface';

const executedDataStoreFactory = {
  createLocalDataStore: (): IExecutedDataStore => {
    return localExecutedDataStore();
  },

  createCloudDataStore: (): IExecutedDataStore => {
    throw new Error('Not Implemented');
  },
};

export default executedDataStoreFactory;
