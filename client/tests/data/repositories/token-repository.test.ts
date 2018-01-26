import tokenRepository from '../../../data/repositories/token-repository';
import { ITokenDataStore } from '../../../data/repositories/data-stores/token/token-data-store-interface';
import { IDataStoreFactory } from '../../../data/repositories/data-stores/data-store-factory-interface';

describe('tokenRepository', () => {
  const mockTokenDataStore: ITokenDataStore = {
    issue: (token) => {
      return new Promise<string>((resolve) => {
        resolve(token);
      });
    },
    find: () => 'found_token',
    update: () => { },
  };

  const mockTokenDataFactory: IDataStoreFactory<ITokenDataStore> = {
    createCloudDataStore: () => mockTokenDataStore,
    createLocalDataStore: () => mockTokenDataStore,
  };

  it('issue should return expected', () => {

    const expected = 'token';

    expect(
      tokenRepository(mockTokenDataFactory)
        .issue(expected),
    ).resolves.toBe(expected);
  });
});
