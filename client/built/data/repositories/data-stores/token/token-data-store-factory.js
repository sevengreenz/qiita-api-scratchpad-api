import localTokenDataStore from './local-token-data-store';
import cloudTokenDataStore from './cloud-token-data-store';
var tokenDataStoreFactory = {
    createLocalDataStore: function () {
        return localTokenDataStore();
    },
    createCloudDataStore: function () {
        return cloudTokenDataStore();
    },
};
export default tokenDataStoreFactory;
//# sourceMappingURL=token-data-store-factory.js.map