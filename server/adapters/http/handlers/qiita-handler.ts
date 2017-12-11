import * as lambda from 'aws-lambda';
import QiitaOutput from '../outputs/qiita-output';
import QiitaApiGateway from '../../../adapters/api-gateways/qiita-api-gateway';
import ExecuteApi from '../../../usecases/interactors/qiita/execute-api';
import Authorize from '../../../usecases/interactors/qiita/authorize';
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
  const output = new QiitaOutput(callback);
  const interactor = new Authorize(output);

  interactor.execute({});
};
