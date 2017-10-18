import * as lambda from 'aws-lambda';

export const hello: lambda.ProxyHandler = async (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): Promise<void> => {
  const response = {
    body: JSON.stringify({
      message: 'Hello TypeScript!!!!',
    }),
    headers: {},
    statusCode: 200,
  };

  callback(undefined, response);
};
