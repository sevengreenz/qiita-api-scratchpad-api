import * as lambda from 'aws-lambda';
import QiitaOutput from '../outputs/qiita-output';
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

  const output = new QiitaOutput(callback);
  const interactor = executeApiInteractor(output, qiitaApiGateway);

  await interactor.execute(params);
};

export const authorize: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {
  const output = new QiitaOutput(callback);
  const interactor = authorizeInteractor(output);

  interactor.execute({});
};
