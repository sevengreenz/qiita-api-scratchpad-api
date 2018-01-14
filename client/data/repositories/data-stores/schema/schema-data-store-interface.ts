import { IResource } from '../../../../domain/qiita';

export interface ISchemaDataStore {
  fetch: () => Promise<IResource[]>;
}
