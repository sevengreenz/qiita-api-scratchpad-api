import cloudSchemaDataStore from './cloud-schema-data-store';
import { ISchemaDataStore } from './schema-data-store-interface';

const schemaDataStoreFactory = {
  createLocalDataStore: (): ISchemaDataStore => {
    throw new Error('Not Implemented');
  },

  createCloudDataStore: (): ISchemaDataStore => {
    return cloudSchemaDataStore();
  },
};

export default schemaDataStoreFactory;
