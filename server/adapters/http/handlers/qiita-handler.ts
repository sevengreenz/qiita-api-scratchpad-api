import * as lambda from 'aws-lambda';
import QiitaOutput from '../outputs/qiita-output';
import qiitaApiGateway from '../../../adapters/api-gateways/qiita-api-gateway';
import ExecuteApiInteractor from '../../../usecases/interactors/qiita/execute-api';
import AuthorizeInteractor from '../../../usecases/interactors/qiita/authorize';

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
  const interactor = new ExecuteApiInteractor(output, qiitaApiGateway);

  await interactor.execute(params);
};

export const authorize: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {
  const output = new QiitaOutput(callback);
  const interactor = new AuthorizeInteractor(output);

  interactor.execute({});
};
