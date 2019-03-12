import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { Response } from 'jsonrpc';
import RpcHandler from '../adapters/rpc/handlers/JsonRpcController';
import * as sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

const createAPIGatewayResult = (params: Response): APIGatewayProxyResult => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
  };

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify(params),
  };
}

export const handler: APIGatewayProxyHandler = (
  event,
  context,
  callback
) => {
  RpcHandler({ headers: event.headers, body: event.body || '' })
    .then(response => {
      console.log({
        response,
        request: {
          headers: event.headers,
          body: event.body
        }
      });
      const result = createAPIGatewayResult(response);

      callback(undefined, result);
    })
    .catch(err => {
      console.log(err);
      callback(err);
    });
};
