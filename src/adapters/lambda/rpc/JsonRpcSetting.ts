import QiitaInteractor from '../../../usecases/interactors/qiita-interactor';
import ExecuteApiOutput from './outputs/api-output';

const executeApiOutput = ExecuteApiOutput();

const setting: { [key: string]: Function } = {
  executeApi: QiitaInteractor(executeApiOutput).executeApi,
  issueToken: QiitaInteractor(executeApiOutput).issueToken
}

export default setting;
