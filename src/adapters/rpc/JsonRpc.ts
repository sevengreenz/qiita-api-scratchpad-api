import jsonRpcErrorFn, { JsonRpcError } from './JsonRpcError';
import { DecodedRequestBody, Response, ErrorResponse } from 'jsonrpc';
import { JsonRpcInteractor } from 'src/types/contracts';
import JsonRpcSetting from './JsonRpcSetting';
import { path } from 'ramda';

const JSONRPC_SPEC = '2.0';

const errorResponse = (id: Response['id'] | null, err: JsonRpcError) => ({
  id,
  jsonrpc: JSONRPC_SPEC,
  error: jsonRpcErrorFn.createError(err)
})

const parseErrorResponse = (): ErrorResponse => {
  return errorResponse(null, JsonRpcError.parseError);
};

export interface IProcedure {
  call: (token: string) => Promise<Response>;
}

const make = (rpcRequest: DecodedRequestBody): IProcedure | ErrorResponse => {
  const procedure = path<JsonRpcInteractor>([rpcRequest.method], JsonRpcSetting);

  if (procedure === undefined) {
    return errorResponse(rpcRequest.id, JsonRpcError.methodNotFound);
  };

  const rpc = (procedure: JsonRpcInteractor) => {
    return {
      call: async (token: string) => {
        const params = Object.assign(rpcRequest.params, { token });
        return await procedure(params)
          .then(result => {
            return Promise.resolve(Object.assign({}, result, { jsonrpc: JSONRPC_SPEC, id: rpcRequest.id }));
          }).catch(error => {
            return errorResponse(rpcRequest.id, JsonRpcError.InternalError);
          });
      },
    };
  };

  return rpc(procedure);
};

export default {
  errorResponse,
  parseErrorResponse,
  make,
};
