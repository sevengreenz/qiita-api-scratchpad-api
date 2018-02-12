import executedDataStoreFactory from './data-stores/executed/executed-data-store-factory';
import { IExecutedRepository } from '../../domain/repositories/executed-repository-interface';

const executedRepository: IExecutedRepository = {
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

export default executedRepository;
