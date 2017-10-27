import * as lambda from 'aws-lambda';
import { QiitaDomain } from '../../../domain/qiita-domain';
import QiitaOutput from '../outputs/qiita-output';
import QiitaApiGateway from '../../../usecases/api-gateway/qiita-api-gateway';
import QiitaApi from '../../api/qiita-api';
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
  const qiitaApi = new QiitaApi(axios);
  const usecase = new QiitaApiGateway(output, qiitaApi);

  await usecase.execute(params);
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
