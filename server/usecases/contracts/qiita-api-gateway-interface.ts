import { IQiitaApiResponse } from '../../domain/qiita-domain';
import { AxiosRequestConfig, AxiosInstance } from 'axios';

/** Qiita API Gateway インターフェース */
export default interface IQiitaApiGateway {
  (createHttpClient: (config: AxiosRequestConfig) => AxiosInstance): {
    /**
     * 汎用的な API 実行
     */
    execute: (method: string, url: string, params: object, token: string) => Promise<IQiitaApiResponse>,

    /**
     * アクセストークン発行
     */
    issueToken: (code: string) => Promise<string>,
  };
}

