
/** Qiita API 実行クラスインターフェース */
export default interface IQiitaApi {
  execute(method: string, url: string, params: object): Promise<IQiitaApiResponse>;
}

/** Qiita API 実行結果インターフェース */
export interface IQiitaApiResponse {
  data: any;
  headers: any;
}
