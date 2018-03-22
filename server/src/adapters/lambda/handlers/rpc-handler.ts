import * as lambda from 'aws-lambda';
import jsonRpc, { IRpcRequest } from '../../json-rpc';
import responseFactory from '../../lambda/outputs/response';

export const rpc: lambda.ProxyHandler = async (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): Promise<void> => {
  let rpcRequest: IRpcRequest | undefined;

  try {
    console.log(event.body);
    rpcRequest = JSON.parse(event.body || '') as IRpcRequest;
    console.log(rpcRequest);

    const token = () => {
      console.log(event.headers.Authorization);
      const matched = (event.headers.Authorization || '').match(/^Bearer[ ]+(.+)/i);
      return matched === null
        ? ''
        : matched[1];
    };

    jsonRpc.make(rpcRequest)
      .call(token(), callback);
  } catch (e) {
    console.log(e);
    callback(undefined, responseFactory.makeFailureResponse({
      id: rpcRequest === undefined ? '' : rpcRequest.id,
      statusCode: 200,
      headers: {},
      body: e,
    }));
  }
};
