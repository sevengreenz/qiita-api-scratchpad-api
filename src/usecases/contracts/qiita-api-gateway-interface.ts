import { IQiitaApiResponse, IIssueTokenResponse } from '../../domain/QiitaDomain';

/** Qiita API Gateway インターフェース */
export default interface IQiitaApiGateway {
  /**
   * 汎用的な API 実行
   */
  execute: (method: string, url: string, params: object, token: string) => Promise<IQiitaApiResponse>;

  /**
   * アクセストークン発行
   */
  issueToken: (code: string) => Promise<IIssueTokenResponse>;
}

