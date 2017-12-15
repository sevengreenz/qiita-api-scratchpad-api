import { IQiitaApiResponse } from '../../domain/qiita-domain';
import { AxiosRequestConfig, AxiosInstance } from 'axios';

/** Qiita API Gateway インターフェース */
export default interface IQiitaApiGateway {
  (createHttpClient: (config: AxiosRequestConfig) => AxiosInstance): {
    execute: (method: string, url: string, params: object) => Promise<IQiitaApiResponse>,
  };

  // execute(method: string, url: string, params: object): Promise<IQiitaApiResponse>;
}

