import axios from 'axios';
import QiitaData from '../data/qiita-data';
import util from '../util';

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

/** API 実行結果インターフェース */
export interface IApiResponse {
  headers: any;
  data: any;
}

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

/**
 * Qiita Schema 取得
 */
const getSchema = async (): Promise<IResource[]> => {
  const data: QiitaData = new QiitaData(axios);
  const resources: any = await data.findSchema();
  return resources;
};

/**
 * Qiita API 実行
 *
 * @param IApi api
 * @param object params
 */
const execute = async (api: IApi, params: object): Promise<any> => {
  // 値がアサインされていないプロパティを削除
  const convertedParams = util.removeUndefinedProperty(params);

  const data: QiitaData = new QiitaData(axios);
  const result: any = await data.execute(api.method, api.href, convertedParams);
  return result;
};

export default {
  makeApiParams,
  getSchema,
  execute,
};
