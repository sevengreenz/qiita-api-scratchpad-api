import * as lambda from 'aws-lambda';
import jsonRpc, { IRpcRequest } from '../json-rpc';
import jsonRpcErrorFunc, { JsonRpcError } from '../json-rpc-error';
import responseFactory from '../../response';
import * as sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

export const rpc: lambda.ProxyHandler = async (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback
): Promise<void> => {
  let rpcRequest: IRpcRequest | undefined;

  try {
    rpcRequest = JSON.parse(event.body || '') as IRpcRequest;
    console.log(rpcRequest);

    const token = () => {
      const matched = (event.headers.Authorization || '').match(
        /^Bearer[ ]+(.+)/i
      );
      return matched === null ? '' : matched[1];
    };

    await jsonRpc.make(rpcRequest).call(token(), callback);
  } catch (e) {
    console.log('catch error');
    console.log(e);

    callback(
      undefined,
      responseFactory.create(
        200,
        {},
        {
          id: rpcRequest === undefined ? '' : rpcRequest.id,
          errors: {
            code: jsonRpcErrorFunc.errorCodeMapper[JsonRpcError.InternalError],
            message: JsonRpcError.InternalError,
          },
        }
      )
    );
  }
};
