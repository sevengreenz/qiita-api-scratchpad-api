import { IApiResponse } from '../../../../domain/qiita';

export interface IQiitaDataStore {
  execute: (method: string, url: string, params: object) => Promise<IApiResponse>;
}
