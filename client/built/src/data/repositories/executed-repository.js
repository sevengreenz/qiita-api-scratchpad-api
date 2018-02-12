import executedDataStoreFactory from './data-stores/executed/executed-data-store-factory';
var executedRepository = {
    getExecuted: function () {
        return executedDataStoreFactory
            .createLocalDataStore()
            .getExecuted();
    },
    setExecuted: function (executed) {
        executedDataStoreFactory
            .createLocalDataStore()
            .setExecuted(executed);
    },
};
export default executedRepository;
//# sourceMappingURL=executed-repository.js.map