import { ITokenRepository } from '../../domain/repositories/token-repository-interface';
import { ITokenDataStore } from './data-stores/token/token-data-store-interface';
import { IDataStoreFactory } from './data-stores/data-store-factory-interface';

const tokenRepository
  = (tokenDataStoreFactory: IDataStoreFactory<ITokenDataStore>): ITokenRepository => {
    return {
      issue: async (code: string): Promise<string> => {
        return await tokenDataStoreFactory
          .createCloudDataStore()
          .issue(code);
        // const dataStore = tokenDataStoreFactory.createCloudDataStore();
        // return await dataStore.issue(code);
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
  };

export default tokenRepository;
