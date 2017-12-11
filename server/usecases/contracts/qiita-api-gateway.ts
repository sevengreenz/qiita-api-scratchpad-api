
/** Qiita API 実行クラスインターフェース */
export default interface IQiitaApiGateway {
  execute(method: string, url: string, params: object): Promise<IQiitaApiResponse>;
}

/** Qiita API 実行結果インターフェース */
export interface IQiitaApiResponse {
  status: number;
  data: any;
  headers: any;
}
