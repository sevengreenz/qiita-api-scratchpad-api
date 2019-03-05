import { Request, Response, SuccessResponse, ErrorResponse } from 'jsonrpc';

// Adapter Layer
export type ControllerOutput =
  { result: SuccessResponse['result'] } |
  { error: ErrorResponse['error'] }

export interface Controller {
  (request: Request): Promise<Response>;
}
