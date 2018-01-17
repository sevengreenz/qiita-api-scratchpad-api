import { IApiResponse } from '../../domain/qiita';

export interface IQiitaRepository {
  execute: (method: string, url: string, params: object) => Promise<IApiResponse>;
}
