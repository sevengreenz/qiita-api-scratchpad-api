import { IResource } from '../../domain/qiita';
import { AxiosInstance } from 'axios';

/**
 * 外部 API インターフェース
 *
 * @export
 * @interface IExternalApi
 */
export interface IExternalApi {

  /**
   * Qiita API Schema を取得
   */
  (createHttpClient: () => AxiosInstance): () => Promise<IResource[]>;
}
