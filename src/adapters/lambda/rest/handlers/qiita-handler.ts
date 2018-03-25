import * as lambda from 'aws-lambda';
import qiitaOutput from '../outputs/qiita-output';
import qiitaInteractor from '../../../../usecases/interactors/qiita-interactor';

export const authorize: lambda.ProxyHandler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback,
): void => {
  qiitaInteractor(qiitaOutput(callback))
    .authorize();
};
