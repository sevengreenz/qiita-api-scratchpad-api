import cloudSchemaDataStore from './cloud-schema-data-store';
import { ISchemaDataStore } from './schema-data-store-interface';
import httpClientFactory from '../../../../domain/http-client-factory';
import { IDataStoreFactory } from '../data-store-factory-interface';


const schemaDataStoreFactory: IDataStoreFactory<ISchemaDataStore> = {
  createLocalDataStore: (): ISchemaDataStore => {
    throw new Error('Not Implemented');
  },

  createCloudDataStore: (): ISchemaDataStore => {
    return cloudSchemaDataStore(httpClientFactory.createHttpClient);
  },
};

export default schemaDataStoreFactory;
