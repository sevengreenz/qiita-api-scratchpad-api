import { IApiResponse } from '../../domain/qiita';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IScratchpadApiGateway {
  (createHttpClient: (requestConfig: AxiosRequestConfig) => AxiosInstance): {
    executeQiitaApi: (method: string, url: string, params: object) => Promise<IApiResponse>,
  };
}
