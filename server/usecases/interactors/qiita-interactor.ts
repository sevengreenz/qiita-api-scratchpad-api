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

      executeApi: async (method, url, params) => {
        const createHttpClient = () => httpClientFactory.createHttpClient;

        await qiitaApiGateway(createHttpClient())
          .execute(method, url, params)
          .then(outputPort.outputSuccess)
          .catch(outputPort.outputFailure);
      },

      issueToken: async (code) => {
        console.log('issueToken start' + code);
        const createHttpClient = () => httpClientFactory.createHttpClient;

        await qiitaApiGateway(createHttpClient())
          .issueToken(code)
          .then(outputPort.outputSuccess)
          .then(outputPort.outputFailure);
      },

    };
  };

export default qiitaInteractor;
