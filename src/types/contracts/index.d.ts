import { Request, Response, SuccessResponse, ErrorResponse } from 'jsonrpc';

// Adapter Layer
export type ControllerOutput =
  { result: SuccessResponse['result'] } |
  { error: ErrorResponse['error'] }

export interface Controller {
  (request: Request): Promise<Response>;
}

export type JsonRpcInteractor = Interactor<{}, ControllerOutput>;

// Usecase Layer
export interface InputPort<T> {
  (outputPort: OutputPort): T;
}

export interface OutputPort<T = any> {
  outputSuccess(result: any): T;
  outputFailure(error: any): T;
}

export type Interactor<T, U> = (params: T) => Promise<U>;
