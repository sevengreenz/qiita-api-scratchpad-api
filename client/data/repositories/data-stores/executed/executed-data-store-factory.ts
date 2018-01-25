import localExecutedDataStore from './local-executed-data-store';
import { IExecutedDataStore } from './executed-data-store-interface';
import { IDataStoreFactory } from '../data-store-factory-interface';

const executedDataStoreFactory: IDataStoreFactory<IExecutedDataStore> = {
  createLocalDataStore: (): IExecutedDataStore => {
    return localExecutedDataStore();
  },

  createCloudDataStore: (): IExecutedDataStore => {
    throw new Error('Not Implemented');
  },
};

export default executedDataStoreFactory;
