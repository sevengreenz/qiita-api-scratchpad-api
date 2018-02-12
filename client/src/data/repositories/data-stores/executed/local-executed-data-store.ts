import { IExecutedDataStore } from './executed-data-store-interface';

const localExecutedDataStore =
  (): IExecutedDataStore => {
    const key = 'lastExecuteApi';

    return {
      getExecuted: () => {
        const executed = sessionStorage.getItem(key);

        if (executed === null) return null;

        return JSON.parse(executed);
      },

      setExecuted: (executed) => {
        sessionStorage.setItem(key, JSON.stringify(executed));
      },

    };
  };

export default localExecutedDataStore;
