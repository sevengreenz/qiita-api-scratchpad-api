import { ISchemaRepository } from '../../domain/repositories/schema-repository-interface';
import schemaDataStoreFactory from './data-stores/schema/schema-data-store-factory';

const schemaRepository: ISchemaRepository = {
  fetch: async () => {
    return await schemaDataStoreFactory
      .createCloudDataStore()
      .fetch();
  },
};

export default schemaRepository;
