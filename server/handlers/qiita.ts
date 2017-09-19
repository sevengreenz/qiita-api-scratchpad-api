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
