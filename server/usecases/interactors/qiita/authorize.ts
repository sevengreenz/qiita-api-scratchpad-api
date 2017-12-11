import IInputPort from '../../contracts/input-port';
import IOutputPort from '../../contracts/output-port';
import { QiitaDomain } from '../../../domain/qiita-domain';

export default class AuthorizeInteractor implements IInputPort {
  constructor(private outputPort: IOutputPort) { }

  public async execute(params: any): Promise<void> {
    const url = QiitaDomain.makeAuthorizationUrl();

    this.outputPort.outputRedirection(url);
  }
}
