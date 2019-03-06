import jsonRpc from '../json-rpc';
import { Controller } from 'src/types/contracts';
import { DecodedRequestBody, Response } from 'jsonrpc';
import jsonRpcErrorFunc, { JsonRpcError } from '../../rpc/json-rpc-error';
import * as R from 'ramda';
import * as sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

const JSONRPC_SPEC = '2.0';

const rpc: Controller = async (request) => {
  const rpcRequest = R.tryCatch(JSON.parse, R.always(undefined))(request.body || '') as DecodedRequestBody | undefined;
  console.log(rpcRequest);
  if (rpcRequest === undefined) {
    // Request Body が JSON として解釈できないため id:null で返す
    return {
      jsonrpc: JSONRPC_SPEC,
      id: null,
      error: {
        code: jsonRpcErrorFunc.errorCodeMapper[JsonRpcError.InternalError],
        message: JsonRpcError.InternalError,
      },
    }
  };

  const token = () => {
    const matched = (request.headers.Authorization || '').match(
      /^Bearer[ ]+(.+)/i
    );
    return matched === null ? '' : matched[1];
  };

  return await R.tryCatch<(request: DecodedRequestBody) => Promise<Response>>(
    async (request) => {

      const result = await jsonRpc.make(request).call(token());
      return Object.assign({}, result, { jsonrpc: JSONRPC_SPEC, id: request.id });
    },
    async (request) => {
      return {
        jsonrpc: JSONRPC_SPEC,
        id: request.id,
        error: {
          code: jsonRpcErrorFunc.errorCodeMapper[JsonRpcError.InternalError],
          message: JsonRpcError.InternalError,
        },
      }
    }
  )(rpcRequest);
};

export default rpc;

