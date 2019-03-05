import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { Response } from 'jsonrpc';
import RpcHandler from '../adapters/lambda/rpc/handlers/rpc-handler';
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

export const handler: APIGatewayProxyHandler = async (
  event,
  context,
  callback
) => {
  const response = await RpcHandler({ headers: event.headers, body: event.body || '' });
  const result = createAPIGatewayResult(response);

  callback(undefined, result);
  return result;

};
