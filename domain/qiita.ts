import axios from 'axios';
import QiitaRepository from '../client/repositories/qiita-repository';

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
    type: string;
    pattern?: string;
  }

  export function execute(api: IApi, params: object): void {
    const repository: QiitaRepository = new QiitaRepository(axios);
    const result: any = repository.execute(api.method, api.href, params);
  }
}
