import { IApiResponse } from '../../domain/qiita';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IExecuteApi {
  (createHttpClient: (requestConfig: AxiosRequestConfig) => AxiosInstance):
    (method: string, url: string, params: object) => Promise<IApiResponse>;
}
