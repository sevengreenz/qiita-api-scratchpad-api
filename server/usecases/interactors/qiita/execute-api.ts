import IInputPort from '../../contracts/input-port';
import IOutputPort from '../../contracts/output-port';
import IQiitaApiGateway, { IQiitaApiResponse } from '../../contracts/qiita-api-gateway';

export default class ExecuteApiInteractor implements IInputPort {
  constructor(private outputPort: IOutputPort, private qiitaApiGateawy: IQiitaApiGateway) { }

  public async execute(params: any): Promise<void> {
    const result: IQiitaApiResponse = await this.qiitaApiGateawy.execute(
      params.method, params.url, params.params,
    );

    this.outputPort.outputSuccess(result);
  }
}
