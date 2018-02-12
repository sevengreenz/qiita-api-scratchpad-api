jest.mock('../../../data/repositories/data-stores/token/token-data-store-factory');

import tokenRepository from '../../../src/data/repositories/token-repository';
import { ITokenDataStore } from '../../../src/data/repositories/data-stores/token/token-data-store-interface';
import dataStoreFactory from '../../../src/data/repositories/data-stores/token/token-data-store-factory';

describe('tokenRepository', () => {
  const update = jest.fn(() => { });

  const mockTokenDataStore: ITokenDataStore = {
    update,
    issue: (token) => {
      return new Promise<string>((resolve) => {
        resolve(token);
      });
    },
    find: () => 'found_token',
  };

  dataStoreFactory.createCloudDataStore = jest.fn(() => mockTokenDataStore);
  dataStoreFactory.createLocalDataStore = jest.fn(() => mockTokenDataStore);

  describe('issue', () => {
    const expected = 'token';
    const result = tokenRepository.issue(expected);

    it('should return expected', () => {
      expect(result).resolves.toBe(expected);
    });

    it('should createCloudDataStore called', () => {
      expect(dataStoreFactory.createCloudDataStore).toBeCalled();
    });
  });

  describe('find', () => {
    const result = tokenRepository.find();

    it('should return expected', () => {
      expect(result).toBe('found_token');
    });

    it('should createLocalDataStore called', () => {
      expect(dataStoreFactory.createLocalDataStore).toBeCalled();
    });
  });

  describe('update', () => {
    tokenRepository.update('token');

    it('should be called update function', () => {
      expect(update).toBeCalled();
    });
  });
});
