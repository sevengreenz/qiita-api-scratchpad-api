import IInputPort from '../../contracts/input-port';
import IOutputPort from '../../contracts/output-port';
import IQiitaApiGateway from '../../contracts/qiita-api-gateway';
import { IQiitaApiResponse } from '../../../domain/qiita-domain';

export default class ExecuteApiInteractor implements IInputPort {
  constructor(private outputPort: IOutputPort, private qiitaApiGateawy: IQiitaApiGateway) { }

  public async execute(params: any): Promise<void> {
    const result: IQiitaApiResponse = await this.qiitaApiGateawy.execute(
      params.method, params.url, params.params,
    );

    this.outputPort.outputSuccess(result);
  }
}
