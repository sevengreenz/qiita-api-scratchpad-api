import { IInputPort } from '../contracts/input-port-interface';
import IQiitaInteractor from '../contracts/qiita-interactor-interface';
import qiitaApiGateway from '../../adapters/api-gateways/qiita-api-gateway';

const qiitaInteractor: IInputPort<any, IQiitaInteractor> = outputPort => {
  return {
    executeApi: async ({ method, url, params, token }) => {
      return await qiitaApiGateway()
        .execute(method, url, params, token)
        .then(outputPort.outputSuccess)
        .catch(outputPort.outputFailure);
    },

    issueToken: async ({ code }) => {
      return await qiitaApiGateway()
        .issueToken(code)
        .then(outputPort.outputSuccess)
        .then(outputPort.outputFailure);
    },
  };
};

export default qiitaInteractor;
