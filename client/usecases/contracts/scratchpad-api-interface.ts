import { IApiResponse } from '../../domain/qiita';

export interface IScratchpadApi {

  /**
   * Qiita API を実行
   *
   * @param object params
   * @return any
   */
  executeQiitaApi(params: object): Promise<IApiResponse>;
}
