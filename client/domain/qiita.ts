import axios from 'axios';
import QiitaData from '../data/qiita-data';

export namespace Qiita {
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
   * 型に対応する初期値を取得
   *
   * @param string type
   */
  const makeInitialValue = (type: string): any => {
    let initialValue: any = undefined;
    switch (type) {
      case 'string':
        initialValue = '';
        break;
      case 'interger':
        initialValue = 0;
        break;
      case 'array':
        initialValue = [];
        break;
      case 'boolean':
        initialValue = false;
        break;
      case 'null':
        initialValue = null;
        break;
      default:
        console.log('unexpected type: ' + type);
        break;
    }
    return initialValue;
  };

  /**
   * 実行 API のパラメータ作成
   *
   * @param ISchema schema
   */
  export const makeApiParams = (schema: ISchema): { [key: string]: any } => {
    return Object.entries(schema.properties)
      .reduce(
      (params: { [key: string]: any }, x) => {
        const type: string | string[] = x[1].type;
        const propertyType: string = typeof type === 'string' ? type : type[0];
        params[x[0]] = makeInitialValue(propertyType);

        return params;
      }
      ,
      {});
  };

  /**
   * Qiita Schema 取得
   */
  export async function getSchema(): Promise<IResource[]> {
    const data: QiitaData = new QiitaData(axios);
    const resources: any = await data.findSchema();
    return resources;
  }

  /**
   * Qiita API 実行
   *
   * @param IApi api
   * @param object params
   */
  export async function execute(api: IApi, params: object): Promise<any> {
    const data: QiitaData = new QiitaData(axios);
    const result: any = await data.execute(api.method, api.href, params);
    return result;
  }
}
