import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Qiita } from './../domain/qiita';

export default class QiitaRepository {
  constructor(private httpClient: AxiosInstance) {
    httpClient.defaults.baseURL = 'http://localhost:3000/qiita';
  }

  public async findSchema(): Promise<Qiita.IResource[]> {
    this.httpClient.defaults.baseURL = 'http://qiita.com/api/v2';
    const response: AxiosResponse = await this.httpClient.get('/schema?local=ja');
    return Object.values(response.data.properties);
  }

  public async execute(method: string, url: string, params: object): Promise<AxiosResponse> {
    const apiParams: object = {
      method: method as string,
      url: url as string,
      params: params as object,
    };

    const response: AxiosResponse = await this.httpClient.post('/api', apiParams);
    return response;
  }
}
