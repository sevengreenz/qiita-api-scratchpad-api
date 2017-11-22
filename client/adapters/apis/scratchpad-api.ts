import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IApiResponse } from '../../domain/qiita';
import { IScratchpadApi } from '../../usecases/contracts/scratchpad-api-interface';

export default class ScratchpadApi implements IScratchpadApi {
  constructor(private client: AxiosInstance) {
    client.defaults.baseURL = process.env.BASE_API_URL;
  }

  public async executeQiitaApi(params: object): Promise<IApiResponse> {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response: AxiosResponse = await this.client.post('/api', params, config);
    const result: IApiResponse = {
      headers: response.headers,
      data: response.data,
    };

    return result;
  }
}
