import { IApiResponse } from '../../domain/qiita';

export interface IScratchpadApi {

  /**
   * Qiita API を実行
   *
   * @param string method
   * @param string url
   * @param object params
   * @return any
   */
  executeQiitaApi(method: string, url: string, params: object): Promise<IApiResponse>;
}
