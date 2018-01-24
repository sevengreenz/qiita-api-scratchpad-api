import { IResource } from '../qiita';
import { ISchemaRepository } from '../repositories/schema-repository-interface';

const schemaInteractor =
  (schemaRepository: ISchemaRepository) => {

    return {
      /**
       * Qiita API Schema 取得
       */
      fetch: async (): Promise<IResource[]> => {
        return await schemaRepository.fetch();
      },
    };
  };

export default schemaInteractor;



