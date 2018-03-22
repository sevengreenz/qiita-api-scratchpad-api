import jsonRpcErrorFunc, { JsonRpcError } from '../../json-rpc-error';

interface IRpcResponseBody {
  jsonrpc: string;
  result?: any;
  errors?: {
    code: number;
    message: string;
  };
  id: string;
}

export interface IResponse {
  statusCode: number;
  headers: { [key: string]: string };
  body: IRpcResponseBody;
}

type TMakeResposneParams = {
  id: string;
  statusCode: number;
  headers: { [key: string]: string },
  body: object | string,
};

const makeResponse = (
  {
    id,
    statusCode,
    headers,
    body,
  }: TMakeResposneParams,
  makeBodyFunc: (id: string, body: any) => IRpcResponseBody,
): IResponse => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
  };

  const response: IResponse = {
    statusCode,
    headers: Object.assign(headers, corsHeaders),
    body: makeBodyFunc(id, body),
  };

  return response;
};

const makeSuccessResponse = (params: TMakeResposneParams): IResponse => {
  const makeResponseBody = (id: string, body: object): IRpcResponseBody => {
    return {
      id,
      jsonrpc: '2.0',
      result: JSON.stringify(body),
    };
  };

  return makeResponse(params, makeResponseBody);
};

const makeFailureResponse = (params: TMakeResposneParams): IResponse => {
  const makeResponseBody = (id: string, errorMessage: JsonRpcError): IRpcResponseBody => {
    return {
      id,
      jsonrpc: '2.0',
      errors: {
        code: jsonRpcErrorFunc.errorCodeMapper[errorMessage],
        message: errorMessage,
      },
    };
  };

  return makeResponse(params, makeResponseBody);
};


export default {
  makeSuccessResponse,
  makeFailureResponse,
};
