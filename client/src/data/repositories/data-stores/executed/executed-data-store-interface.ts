import { IExecuteApi } from '../../../../domain/qiita';

export interface IExecutedDataStore {
  getExecuted: () => IExecuteApi | null;
  setExecuted: (executeApi: IExecuteApi) => void;
}
