import { IExecuteApi } from '../qiita';
import { IExecutedRepository } from '../repositories/executed-repository-interface';

const executedInteractor =
  (executedRepository: IExecutedRepository) => {

    return {
      getLastExecuteApi: (): IExecuteApi | null => {
        return executedRepository.getExecuted();
      },
    };
  };

export default executedInteractor;



