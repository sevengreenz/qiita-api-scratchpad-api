jest.mock('../../../data/repositories/data-stores/token/token-data-store-factory');
import tokenRepository from '../../../src/data/repositories/token-repository';
import dataStoreFactory from '../../../src/data/repositories/data-stores/token/token-data-store-factory';
describe('tokenRepository', function () {
    var update = jest.fn(function () { });
    var mockTokenDataStore = {
        update: update,
        issue: function (token) {
            return new Promise(function (resolve) {
                resolve(token);
            });
        },
        find: function () { return 'found_token'; },
    };
    dataStoreFactory.createCloudDataStore = jest.fn(function () { return mockTokenDataStore; });
    dataStoreFactory.createLocalDataStore = jest.fn(function () { return mockTokenDataStore; });
    describe('issue', function () {
        var expected = 'token';
        var result = tokenRepository.issue(expected);
        it('should return expected', function () {
            expect(result).resolves.toBe(expected);
        });
        it('should createCloudDataStore called', function () {
            expect(dataStoreFactory.createCloudDataStore).toBeCalled();
        });
    });
    describe('find', function () {
        var result = tokenRepository.find();
        it('should return expected', function () {
            expect(result).toBe('found_token');
        });
        it('should createLocalDataStore called', function () {
            expect(dataStoreFactory.createLocalDataStore).toBeCalled();
        });
    });
    describe('update', function () {
        tokenRepository.update('token');
        it('should be called update function', function () {
            expect(update).toBeCalled();
        });
    });
});
//# sourceMappingURL=token-repository.test.js.map