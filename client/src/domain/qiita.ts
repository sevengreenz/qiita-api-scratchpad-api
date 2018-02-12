
export interface IQiitaSchemaResponse {
  statusCode: number;
  headers: { [key: string]: string };
  body: string;
}

export interface IResource {
  title: string;
  description: string;
  links: IApi[];
  properties: { [key: string]: any };
  required: string[];
}

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

/** API 実行 URL パラメータ */
export interface IUrlParams {
  [key: string]: string | undefined;
}

/** API 実行データパラメータ */
export interface IApiParams {
  api: IApi;
  urlParams: IUrlParams;
  dataParams: { [key: string]: any };
}

/**
 * API 実行結果インターフェース
 */
export interface IApiResponse {
  headers: any;
  data: any;
}

export interface IExecuteApi {
  resource: IResource;
  api: IApi;
  urlParams: IUrlParams;
  dataParams: { [key: string]: any };
}

const isEmptyApiResponse = (apiResponse: IApiResponse): boolean => {
  return apiResponse.headers === '' && apiResponse.data === '';
};

/**
 * undefined なプロパティを削除
 *
 * @param obj
 */
const removeUndefinedProperty = (obj: { [key: string]: any }) => {
  return Object.entries(obj).reduce(
    (params: { [key: string]: any }, [key, value]) => {
      if (value === undefined) {
        return params;
      }

      Object.assign(params, { [key]: value });
      return params;
    },
    {},
  );
};

/**
 * スキーマの href からパラメータを抽出する
 *
 * @param href
 */
const extractUrlParams = (href: string): IUrlParams => {
  const req = /:(\w+)(?:\/|$)/g;
  let params: IUrlParams = {};
  let key: RegExpExecArray | null;

  while ((key = req.exec(href)) !== null) {
    params = Object.assign(params, { [key[1]]: undefined });
  }

  return params;
};

/**
 * URL パラメータを URL に埋め込む
 *
 * @param href
 * @param urlParams
 */
const embedUrlParams = (href: string, urlParams: IUrlParams): string => {
  return Object.entries(urlParams).reduce(
    (embededHref: string, [key, value]) => {
      return embededHref.replace(`:${key}`, (value || '').toString());
    },
    href,
  );
};

/**
 * 実行 API のパラメータ作成
 *
 * @param ISchema schema
 */
const makeApiParams = (schema: ISchema): { [key: string]: any } => {
  return Object.keys(schema.properties).reduce(
    (params: { [key: string]: any }, property) => {
      return Object.assign(params, { [property]: undefined });
    },
    {},
  );
};

export default {
  isEmptyApiResponse,
  removeUndefinedProperty,
  extractUrlParams,
  embedUrlParams,
  makeApiParams,
};
