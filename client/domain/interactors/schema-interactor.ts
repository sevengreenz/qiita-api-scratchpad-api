import { IResource } from '../qiita';
import schemaRepository from '../../data/repositories/schema-repository';

const schemaInteractor = {
  /**
   * Qiita API Schema 取得
   */
  fetch: async (): Promise<IResource[]> => {
    return await schemaRepository.fetch();
  },
};

export default schemaInteractor;



