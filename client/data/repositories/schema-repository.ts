import { ISchemaRepository } from '../../domain/repositories/schema-repository-interface';
import { IDataStoreFactory } from './data-stores/data-store-factory-interface';
import { ISchemaDataStore } from './data-stores/schema/schema-data-store-interface';

const schemaRepository
  = (schemaDataStoreFactory: IDataStoreFactory<ISchemaDataStore>): ISchemaRepository => {
    return {
      fetch: async () => {
        return await schemaDataStoreFactory
          .createCloudDataStore()
          .fetch();
      },
    };
  };

export default schemaRepository;
