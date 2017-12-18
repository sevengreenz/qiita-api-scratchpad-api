import * as lambda from 'aws-lambda';
import qiitaOutput from '../outputs/qiita-output';
import qiitaApiGateway from '../../../adapters/api-gateways/qiita-api-gateway';
import qiitaInteractor from '../../../usecases/interactors/qiita-interactor';

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

  await qiitaInteractor(qiitaOutput(callback), qiitaApiGateway)
    .executeApi(params.method, params.url, params.params);
};

export const authorize: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {
  qiitaInteractor(qiitaOutput(callback))
    .authorize();
};

export const issueToken: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {
  const params: {
    code: string,
  } = JSON.parse(event.body || '');

  qiitaInteractor(qiitaOutput(callback))
    .issueToken(params.code);
};
