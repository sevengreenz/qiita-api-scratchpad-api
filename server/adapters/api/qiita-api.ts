import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import IQiitaApi, { IQiitaApiResponse } from '../../usecases/contracts/qiita-api';

export default class QiitaApi implements IQiitaApi {
  constructor(private httpClient: AxiosInstance) {
    // TODO: できれば抽象に依存させる
  }

  public async execute(method: string, url: string, params: object): Promise<IQiitaApiResponse> {
    const requestConfig: AxiosRequestConfig = {
      url: 'http://qiita.com' + url,
      method: method as string,
    };

    switch (method) {
      case 'GET':
        requestConfig.params = params;
        requestConfig.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        break;
      case 'POST':
      case 'PUT':
      case 'DELETE':
        requestConfig.data = params;
        requestConfig.headers = { 'Content-Type': 'application/json' };
        break;
      default:
      // TODO: throw Error
    }

    console.log(requestConfig);
    const response: AxiosResponse = await this.httpClient.request(requestConfig);

    const result: IQiitaApiResponse = {
      data: response.data,
      headers: response.headers,
    };
    console.log(result);

    return result;
  }
}
