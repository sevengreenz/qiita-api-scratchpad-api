import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Qiita } from './../../domain/qiita';
// import { IQiitaSchemaResponse, IResource } from './../../domain/qiita';

export default class QiitaRepository {
  constructor(private httpClient: AxiosInstance) {
    httpClient.defaults.baseURL = 'http://localhost:3000/qiita';
  }

  public async findSchema(): Promise<Qiita.IResource[]> {
    const response: AxiosResponse = await this.httpClient.get('schema');
    return Object.values(response.data.properties);
  }

  public async execute(method: string, url: string, params: object): Promise<any> {
    const apiParams: object = {
      method: method as string,
      url: url as string,
      params: params as object,
    };
    console.log(apiParams);
    const response: AxiosResponse = await this.httpClient.post('/api', apiParams);
    console.log(response);
    return response;
  }
}
