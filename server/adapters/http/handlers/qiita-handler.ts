import * as lambda from 'aws-lambda';
import { QiitaDomain } from '../../../domain/qiita-domain';
import QiitaOutput from '../outputs/qiita-output';
import QiitaApiGateway from '../../../adapters/api-gateways/qiita-api-gateway';
import ExecuteApi from '../../../usecases/interactors/qiita/execute-api';
import axios from 'axios';

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
  const qiitaApiGateway = new QiitaApiGateway(axios.create());
  const interactor = new ExecuteApi(output, qiitaApiGateway);

  await interactor.execute(params);
};

export const authorize: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {

  const locationUrl = QiitaDomain.makeAuthorizationUrl();

  const output = new QiitaOutput(callback);
  output.outputRedirection(locationUrl);
};
