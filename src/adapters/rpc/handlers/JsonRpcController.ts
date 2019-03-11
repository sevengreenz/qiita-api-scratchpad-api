import JsonRpc, { IProcedure } from '../JsonRpc';
import { Controller } from 'src/types/contracts';
import { DecodedRequestBody, ErrorResponse } from 'jsonrpc';
import { tryCatch, has } from 'ramda';
import * as sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

const rpc: Controller = async (request) => {
  const rpcRequest = tryCatch(JSON.parse, JsonRpc.parseErrorResponse)(request.body) as DecodedRequestBody | ErrorResponse;
  if (has('error')(rpcRequest)) {
    return rpcRequest as ErrorResponse;
  }

  const token = () => {
    const matched = (request.headers.Authorization || '').match(
      /^Bearer[ ]+(.+)/i
    );
    return matched === null ? '' : matched[1];
  };

  const rpc = JsonRpc.make(rpcRequest as DecodedRequestBody);
  if (has('error')(rpc)) {
    return rpc as ErrorResponse;
  }

  return await (rpc as IProcedure).call(token());
};

export default rpc;

