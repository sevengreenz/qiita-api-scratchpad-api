export interface IApi {
  title: string;
  description: string;
  href: string;
  method: string;
  schema?: ISchema;
  required?: string[];
}

export interface ISchema {
  properties: { [key: string]: IProperty };
  required?: string[];
}

export interface IProperty {
  description: string;
  example: string;
  type: string | string[];
  pattern?: string;
}

/** API 実行パラメータインターフェース */
export interface IApiParams {
  api: IApi;
  properties: { [key: string]: any };
}

/** API 実行結果インターフェース */
export interface IApiResponse {
  headers: any;
  data: any;
}

export interface IQiitaState {
  apiParams: IApiParams;
  apiResponse: IApiResponse;
}
