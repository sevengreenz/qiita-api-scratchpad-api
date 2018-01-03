import { ISession } from '../adapters/contracts/session-interface';

const session = (): ISession => {
  return {
    get: (key) => {
      return sessionStorage.getItem(key);
    },

    set: (key, value) => {
      sessionStorage.setItem(key, value);
    },
  };
};

export default session;
