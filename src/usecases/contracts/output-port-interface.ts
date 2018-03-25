import * as lambda from 'aws-lambda';

export interface IOutputFunc {
  outputSuccess(result: any): void;
  outputFailure(result: any): void;
}

export default interface IOutputPort {
  (callback: lambda.Callback, id?: string): IOutputFunc;
}
