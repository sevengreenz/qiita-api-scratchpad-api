/** Qiita API 実行結果インターフェース */
export interface IQiitaApiResponse {
  status: number;
  data: any;
  headers: any;
}

export interface IIssueTokenResponse {
  token: string;
}
