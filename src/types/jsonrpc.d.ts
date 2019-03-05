export interface Request {
  headers: { [key: string]: string };
  body: string;
}

export interface DecodedRequestBody {
  jsonrpc: string;
  method: string;
  params: { [key: string]: any };
  id: string;
}

export interface SuccessResponse {
  jsonrpc: string;
  id: string;
  result: {}
}

export interface ErrorResponse {
  jsonrpc: string;
  id: string | null;
  error: {
    code: number;
    message: string;
    data?: any
  }
}

export type Response = SuccessResponse | ErrorResponse;
