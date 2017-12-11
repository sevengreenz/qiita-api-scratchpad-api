import IInputPort from '../../contracts/input-port';
import IOutputPort from '../../contracts/output-port';
import qiitaDomain from '../../../domain/qiita-domain';

export default class AuthorizeInteractor implements IInputPort {
  constructor(private outputPort: IOutputPort) { }

  public async execute(params: any): Promise<void> {
    const url = qiitaDomain.makeAuthorizationUrl();

    this.outputPort.outputRedirection(url);
  }
}
