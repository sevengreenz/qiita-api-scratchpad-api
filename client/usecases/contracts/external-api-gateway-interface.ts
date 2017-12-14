import { IResource } from '../../domain/qiita';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * 外部 API インターフェース
 *
 * @export
 * @interface IExternalApi
 */
export interface IExternalApiGateway {

  /**
   * Qiita API Schema を取得
   */
  (createHttpClient: (config: AxiosRequestConfig) => AxiosInstance): {
    findQiitaApiSchema: () => Promise<IResource[]>,
  };
}
