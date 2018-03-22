import * as lambda from 'aws-lambda';
import qiitaOutput from '../outputs/qiita-output';
import qiitaInteractor from '../../../usecases/interactors/qiita-interactor';

/*
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

  const token = () => {
    const matched = (event.headers.Authorization || '').match(/^Bearer[ ]+(.+)/i);
    return matched === null
      ? ''
      : matched[1];
  };

  await qiitaInteractor(qiitaOutput(callback))
    .executeApi(params.method, params.url, params.params, token());
};
*/
export const authorize: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {
  qiitaInteractor(qiitaOutput(callback))
    .authorize();
};
/*
export const issueToken: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {
  const params: {
    code: string,
  } = JSON.parse(event.body || '');
  console.log(params);

  qiitaInteractor(qiitaOutput(callback))
    .issueToken(params.code);
};
*/
