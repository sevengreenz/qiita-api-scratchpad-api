import { IDataStoreFactory } from './data-stores/data-store-factory-interface';
import { IExecutedDataStore } from './data-stores/executed/executed-data-store-interface';
import { IExecutedRepository } from '../../domain/repositories/executed-repository-interface';

const executedRepository
  = (executedDataStoreFactory: IDataStoreFactory<IExecutedDataStore>): IExecutedRepository => {
    return {
      getExecuted: () => {
        return executedDataStoreFactory
          .createLocalDataStore()
          .getExecuted();
      },

      setExecuted: (executed) => {
        executedDataStoreFactory
          .createLocalDataStore()
          .setExecuted(executed);
      },

    };
  };

export default executedRepository;
