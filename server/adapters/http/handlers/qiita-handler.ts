import * as lambda from 'aws-lambda';
import qiitaOutput from '../outputs/qiita-output';
import qiitaApiGateway from '../../../adapters/api-gateways/qiita-api-gateway';
import executeApiInteractor from '../../../usecases/interactors/qiita/execute-api';
import authorizeInteractor from '../../../usecases/interactors/qiita/authorize';

export const callApi: lambda.ProxyHandler = async (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): Promise<void> => {
  const params: {
    method: string,
    url: string,
    params: object,
  } = JSON.parse(event.body || '');

  await executeApiInteractor(qiitaOutput(callback), qiitaApiGateway)
    .execute(params);
};

export const authorize: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {
  authorizeInteractor(qiitaOutput(callback))
    .execute({});
};
