import { IApiResponse } from '../../domain/qiita';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IQiitaRepository {
  (createHttpClient: (requestConfig: AxiosRequestConfig) => AxiosInstance): {
    executeQiitaApi: (method: string, url: string, params: object) => Promise<IApiResponse>,
  };
}
