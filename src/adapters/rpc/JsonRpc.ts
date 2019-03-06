import jsonRpcErrorFunc, { JsonRpcError } from './json-rpc-error';
import { DecodedRequestBody, Response, ErrorResponse } from 'jsonrpc';
import { JsonRpcInteractor } from 'src/types/contracts';
import JsonRpcSetting from './JsonRpcSetting';
import { path } from 'ramda';

const JSONRPC_SPEC = '2.0';

const parseErrorResponse = (): ErrorResponse => ({
  jsonrpc: JSONRPC_SPEC,
  id: null,
  error: {
    code: jsonRpcErrorFunc.errorCodeMapper[JsonRpcError.parseError],
    message: JsonRpcError.parseError,
  },
});

export interface IProcedure {
  call: (token: string) => Promise<Response>;
}

const make = (rpcRequest: DecodedRequestBody): IProcedure | ErrorResponse => {
  const procedure = path<JsonRpcInteractor>([rpcRequest.method], JsonRpcSetting);

  if (procedure === undefined) {
    return {
      jsonrpc: JSONRPC_SPEC,
      id: rpcRequest.id,
      error: {
        code: jsonRpcErrorFunc.errorCodeMapper[JsonRpcError.methodNotFound],
        message: JsonRpcError.methodNotFound,
      },
    }
  };

  const rpc = (procedure: JsonRpcInteractor) => {
    return {
      call: async (token: string) => {
        const params = Object.assign(rpcRequest.params, { token });
        return await procedure(params)
          .then(result => {
            return Promise.resolve(Object.assign({}, result, { jsonrpc: JSONRPC_SPEC, id: rpcRequest.id }));
          }).catch(error => {
            return {
              jsonrpc: JSONRPC_SPEC,
              id: rpcRequest.id,
              error: {
                code: jsonRpcErrorFunc.errorCodeMapper[JsonRpcError.InternalError],
                message: JsonRpcError.InternalError,
              },
            }
          });
      },
    };
  };

  return rpc(procedure);
};

export default {
  parseErrorResponse,
  make,
};
