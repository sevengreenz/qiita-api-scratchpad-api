import { IExecuteApi } from '../qiita';

export interface IExecutedRepository {
  getExecuted: () => IExecuteApi | null;
  setExecuted: (executed: IExecuteApi) => void;
}
