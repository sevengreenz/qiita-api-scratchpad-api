import * as lambda from 'aws-lambda';
import axios from 'axios';
import qiitaRepository from '../../repositories/qiita-repository';
import { Qiita } from '../../domain/qiita';
import { QiitaOutput } from '../outputs/qiita-output';

export const qiita: lambda.ProxyHandler = async (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): Promise<void> => {
  const repository = new qiitaRepository(axios);
  const response = await repository.findSchema();

  callback(undefined, response);
};

export const callApi: lambda.ProxyHandler = async (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): Promise<void> => {
  const data: {
    method: string,
    url: string,
    params: object,
  } = JSON.parse(event.body || '');

  const repository = new qiitaRepository(axios);
  const response = await repository.callApi(data.url, data.method, data.params);

  QiitaOutput.outputCall(callback, response);
};

export const authorize: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {

  const locationUrl = Qiita.makeAuthorizationUrl();

  QiitaOutput.outputAuthorize(callback, locationUrl);
};
