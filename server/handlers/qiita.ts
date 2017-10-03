import * as lambda from 'aws-lambda';
import axios from 'axios';
import qiitaRepository from '../repositories/qiita-repository';

export const qiita: lambda.ProxyHandler = async (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): Promise<void> => {
  const repository = new qiitaRepository(axios);
  const response = await repository.findSchema();

  callback(null, response);
};

export const call: lambda.ProxyHandler = async (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): Promise<void> => {
  const data: {
    method: string,
    url: string,
    params: object,
  } = JSON.parse(event.body);

  const repository = new qiitaRepository(axios);
  const response = await repository.callApi(data.url, data.method, data.params);

  callback(null, response);
};
