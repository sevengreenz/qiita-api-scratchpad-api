import IInputPort from '../../contracts/input-port';
import IOutputPort from '../../contracts/output-port';
import IQiitaApiGateway from '../../contracts/qiita-api-gateway-interface';
import httpClientFactory from '../http-client-factory';
import { IQiitaApiResponse } from '../../../domain/qiita-domain';

export default class ExecuteApiInteractor implements IInputPort {
  constructor(private outputPort: IOutputPort, private qiitaApiGateway: IQiitaApiGateway) { }

  public async execute(params: any): Promise<void> {
    const createHttpClient = () => httpClientFactory.createHttpClient;

    const result: IQiitaApiResponse = await this.qiitaApiGateway(createHttpClient()).execute(
      params.method, params.url, params.params,
    );

    this.outputPort.outputSuccess(result);
  }
}
