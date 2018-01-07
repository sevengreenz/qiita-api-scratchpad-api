import { ITokenRepository } from '../../domain/repositories/token-repository-interface';

const tokenStorageGateway = (): ITokenRepository => {
  const key = 'access_token';

  return {
    get: () => {
      return sessionStorage.getItem(key);
    },

    set: (token) => {
      sessionStorage.setItem(key, token);
    },
  };
};

export default tokenStorageGateway;
