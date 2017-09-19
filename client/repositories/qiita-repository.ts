import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IQiitaSchemaResponse, IResource } from './../../domain/qiita';

export default class QiitaRepository {
  constructor(private httpClient: AxiosInstance) {
    httpClient.defaults.baseURL = 'http://localhost:3000/qiita';
  }

  public async findSchema(): Promise<[Map<string, IResource>]> {
    const response: AxiosResponse = await this.httpClient.get('schema');
    return response.data.properties;
  }
}
