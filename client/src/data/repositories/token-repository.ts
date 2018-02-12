import { ITokenRepository } from '../../domain/repositories/token-repository-interface';
import tokenDataStoreFactory from './data-stores/token/token-data-store-factory';

const tokenRepository: ITokenRepository = {
  issue: async (code: string): Promise<string> => {
    return await tokenDataStoreFactory
      .createCloudDataStore()
      .issue(code);
  },

  find: (): string | null => {
    return tokenDataStoreFactory
      .createLocalDataStore()
      .find();
  },

  update: (token: string) => {
    return tokenDataStoreFactory
      .createLocalDataStore()
      .update(token);
  },
};

export default tokenRepository;
