import IInputPort from '../contracts/input-port';
import IOutputPort from '../contracts/output-port';
import IQiitaApi from '../contracts/qiita-api';

export default class QiitaApiGateway implements IInputPort {

  constructor(private outputPort: IOutputPort, private api: IQiitaApi) { }

  public async execute(params: any): Promise<any> {
    const result = await this.api.execute(params.method, params.url, params.params);

    this.outputPort.outputSuccess(result);
  }
}
