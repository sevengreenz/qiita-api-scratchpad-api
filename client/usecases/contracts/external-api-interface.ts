import { IResource } from '../../domain/qiita';

export interface IExternalApi {

  /**
   * Qiita API Schema を取得
   *
   * @param object params
   * @return any
   */
  findQiitaApiSchema(): Promise<IResource[]>;
}
