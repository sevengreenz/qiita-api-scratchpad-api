// import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export default class QiitaRepository {
  // TODO: Axios 注入
  // constructor(private httpClient: AxiosInstance) {
  //   httpClient.defaults.baseURL = 'http://qiita.com/api/v2';
  // }

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
