import { IExternalApi } from '../contracts/external-api-interface';
import { IResource } from '../../domain/qiita';

export default class ExternalApiGateway {
  constructor(private api: IExternalApi) {
  }

  public fetchQiitaApiSchema(): Promise<IResource[]> {
    return this.api.findQiitaApiSchema();
  }
}
