import localExecutedDataStore from './local-executed-data-store';
var executedDataStoreFactory = {
    createLocalDataStore: function () {
        return localExecutedDataStore();
    },
    createCloudDataStore: function () {
        throw new Error('Not Implemented');
    },
};
export default executedDataStoreFactory;
//# sourceMappingURL=executed-data-store-factory.js.map