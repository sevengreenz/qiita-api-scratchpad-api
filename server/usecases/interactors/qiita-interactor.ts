import IInputPort from '../contracts/input-port-interface';
import qiitaDomain from '../../domain/qiita-domain';
import httpClientFactory from './http-client-factory';
import IQiitaApiGateway from '../contracts/qiita-api-gateway-interface';
import IQiitaInteractor from '../contracts/qiita-interactor-interface';

const qiitaInteractor: IInputPort<IQiitaInteractor>
  = (outputPort, qiitaApiGateway: IQiitaApiGateway) => {
    return {
      authorize: async () => {
        const url = qiitaDomain.makeAuthorizationUrl();

        outputPort.outputRedirection(url);
      },

      executeApi: async (method, url, params, token) => {
        await qiitaApiGateway(httpClientFactory.createHttpClient)
          .execute(method, url, params, token)
          .then(outputPort.outputSuccess)
          .catch(outputPort.outputFailure);
      },

      issueToken: async (code) => {
        console.log('issueToken start' + code);

        await qiitaApiGateway(httpClientFactory.createHttpClient)
          .issueToken(code)
          .then(outputPort.outputSuccess)
          .then(outputPort.outputFailure);
      },

    };
  };

export default qiitaInteractor;
