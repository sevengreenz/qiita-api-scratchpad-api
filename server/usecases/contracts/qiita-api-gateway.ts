import { IQiitaApiResponse } from '../../domain/qiita-domain';

/** Qiita API 実行クラスインターフェース */
export default interface IQiitaApiGateway {
  execute(method: string, url: string, params: object): Promise<IQiitaApiResponse>;
}

