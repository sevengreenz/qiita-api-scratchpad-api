
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

/** API 実行パラメータインターフェース */
export interface IApiParams {
  api: IApi;
  properties: { [key: string]: any };
}

/**
 * API 実行結果インターフェース
 */
export interface IApiResponse {
  headers: any;
  data: any;
}

/**
 * Qiita State インターフェース
 */
export interface IQiitaState {
  resources: IResource[];
  targetResource: IResource;
  targetApi: IApi;
  params: { [key: string]: any };
  apiResponse?: IApiResponse;
}

const createInitialState = (): IQiitaState => {
  return {
    resources: [],
    targetResource: {
      title: '',
      description: '',
      links: [],
      properties: {},
      required: [],
    },
    targetApi: {
      title: '',
      description: '',
      href: '',
      method: '',
      required: [],
    },
    params: {},
    apiResponse: undefined,
  };
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
  createInitialState,
  makeApiParams,
};
