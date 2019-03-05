export interface IOutputFunc<T> {
  outputSuccess(result: any): T;
  outputFailure(result: any): T;
}

export interface IOutputPort<T> {
  (): IOutputFunc<T>;
}
