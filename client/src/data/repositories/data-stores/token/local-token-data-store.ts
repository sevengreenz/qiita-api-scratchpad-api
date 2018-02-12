import { ITokenDataStore } from './token-data-store-interface';

const localTokenDataStore = (): ITokenDataStore => {
  const key = 'access_token';

  return {
    issue: async (): Promise<string> => {
      throw Error('Not Implemented');
    },

    find: () => {
      return sessionStorage.getItem(key);
    },

    update: (token) => {
      sessionStorage.setItem(key, token);
    },

  };
};

export default localTokenDataStore;
