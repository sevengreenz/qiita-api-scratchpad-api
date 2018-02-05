import cloudQiitaDataStore from './cloud-qiita-data-store';
var qiitaDataStoreFactory = {
    createLocalDataStore: function () {
        throw new Error('Not Implemented');
    },
    createCloudDataStore: function () {
        return cloudQiitaDataStore();
    },
};
export default qiitaDataStoreFactory;
//# sourceMappingURL=qiita-data-store-factory.js.map