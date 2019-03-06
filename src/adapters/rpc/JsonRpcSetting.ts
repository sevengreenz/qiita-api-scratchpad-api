import QiitaInteractor from '../../usecases/interactors/qiita-interactor';
import ExecuteApiOutput from './outputs/api-output';
import IQiitaInteractor from 'src/usecases/contracts/qiita-interactor-interface';
import { ControllerOutput } from 'contract';

const executeApiOutput = ExecuteApiOutput;

const setting: IQiitaInteractor<ControllerOutput> = {
  executeApi: QiitaInteractor(executeApiOutput).executeApi,
  issueToken: QiitaInteractor(executeApiOutput).issueToken
}

export default setting;
