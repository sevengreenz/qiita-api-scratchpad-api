import { IExecuteApi } from '../qiita';
import executedRepository from '../../data/repositories/executed-repository';

const executedInteractor = {
  getLastExecuteApi: (): IExecuteApi | null => {
    return executedRepository.getExecuted();
  },
};

export default executedInteractor;



