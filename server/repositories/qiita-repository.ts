import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { Qiita } from '../domain/qiita';

export default class QiitaRepository {
  constructor(private httpClient: AxiosInstance) {
    httpClient.defaults.baseURL = 'http://qiita.com/api/v2';
  }

  public async findSchema(): Promise<Qiita.IQiitaSchemaResponse> {
    const response: AxiosResponse = await this.httpClient.get('schema');
    const result: Qiita.IQiitaSchemaResponse = {
      body: response.data,
      headers: response.headers,
      statusCode: response.status,
    };
    return result;
  }

  public async callApi(url: string, method: string, params: object): Promise<any> {
    const axiosConfig: AxiosRequestConfig = {
      url: 'http://qiita.com' + url as string,
      method: method as string,
    };
    switch (method) {
      case 'GET':
        axiosConfig.params = params;
        axiosConfig.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        break;
      case 'POST':
      case 'PUT':
      case 'DELETE':
        axiosConfig.data = params;
        axiosConfig.headers = { 'Content-Type': 'application/json' };
        break;
    }
    console.log(axiosConfig);
    const response: AxiosResponse = await axios(axiosConfig);
    console.log(response);
    return response.data;

  }
}
