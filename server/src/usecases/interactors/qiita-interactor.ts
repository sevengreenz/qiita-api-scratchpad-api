import IInputPort from '../contracts/input-port-interface';
import qiitaDomain from '../../domain/qiita-domain';
import IQiitaInteractor from '../contracts/qiita-interactor-interface';
import qiitaApiGateway from '../../adapters/api-gateways/qiita-api-gateway';

const qiitaInteractor: IInputPort<IQiitaInteractor>
  = (outputPort) => {
    return {
      authorize: async () => {
        const url = qiitaDomain.makeAuthorizationUrl();

        outputPort.outputRedirection(url);
      },

      executeApi: async (method, url, params, token) => {
        await qiitaApiGateway()
          .execute(method, url, params, token)
          .then(outputPort.outputSuccess)
          .catch(outputPort.outputFailure);
      },

      issueToken: async (code) => {
        console.log('issueToken start, code: ' + code);

        await qiitaApiGateway()
          .issueToken(code)
          .then(outputPort.outputSuccess)
          .then(outputPort.outputFailure);
      },

    };
  };

export default qiitaInteractor;
