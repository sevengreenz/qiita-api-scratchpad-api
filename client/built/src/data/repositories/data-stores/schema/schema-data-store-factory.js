import cloudSchemaDataStore from './cloud-schema-data-store';
var schemaDataStoreFactory = {
    createLocalDataStore: function () {
        throw new Error('Not Implemented');
    },
    createCloudDataStore: function () {
        return cloudSchemaDataStore();
    },
};
export default schemaDataStoreFactory;
//# sourceMappingURL=schema-data-store-factory.js.map