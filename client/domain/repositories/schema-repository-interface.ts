import { IResource } from '../../domain/qiita';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * 外部 API インターフェース
 *
 * @export
 * @interface IExternalApi
 */
export interface ISchemaRepository {

  /**
   * Qiita API Schema を取得
   */
  (createHttpClient: (config: AxiosRequestConfig) => AxiosInstance): {
    find: () => Promise<IResource[]>,
  };
}
