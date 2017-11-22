import { AxiosInstance, AxiosResponse } from 'axios';
// import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { IResource } from './../domain/qiita';
// import { IResource, IApiResponse } from './../domain/qiita';
import IQiitaData from '../domain/contracts/qiita-data';

export default class QiitaData implements IQiitaData {
  constructor(private httpClient: AxiosInstance) {
    httpClient.defaults.baseURL = process.env.BASE_API_URL;
  }

  public async findSchema(): Promise<IResource[]> {
    this.httpClient.defaults.baseURL = process.env.QIITA_URL;
    const response: AxiosResponse = await this.httpClient.get('/schema?local=ja');
    return Object.values(response.data.properties);
  }
  /*
    public async execute(method: string, url: string, params: object): Promise<IApiResponse> {
      const apiParams: object = {
        method: method as string,
        url: url as string,
        params: params as object,
      };

      const config: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response: AxiosResponse = await this.httpClient.post('/api', apiParams, config);

      const result: IApiResponse = {
        headers: response.headers,
        data: response.data,
      };

      return result;
    }
  */
}
