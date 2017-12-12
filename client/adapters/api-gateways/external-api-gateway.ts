import { AxiosInstance, AxiosResponse } from 'axios';
import { IResource } from '../../domain/qiita';
import { IExternalApi } from '../../usecases/contracts/external-api-interface';

export default class ExternalApiGateway implements IExternalApi {
  constructor(private httpClient: AxiosInstance) {
    this.httpClient.defaults.baseURL = process.env.QIITA_URL;
  }

  public async findQiitaApiSchema(): Promise<IResource[]> {
    const response: AxiosResponse = await this.httpClient.get('/schema?local=ja');

    return Object.values(response.data.properties);
  }
}
