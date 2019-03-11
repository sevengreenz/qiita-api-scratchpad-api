import QiitaInteractor from '../../usecases/interactors/QiitaInteractor';
import ExecuteApiOutput from './outputs/ApiOutput';
import IQiitaInteractor from 'src/usecases/contracts/qiita-interactor-interface';
import { ControllerOutput } from 'contract';

const executeApiOutput = ExecuteApiOutput;

const setting: IQiitaInteractor<ControllerOutput> = {
  executeApi: QiitaInteractor(executeApiOutput).executeApi,
  issueToken: QiitaInteractor(executeApiOutput).issueToken
}

export default setting;
