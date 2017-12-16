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

        const result = await qiitaApiGateway(createHttpClient()).execute(
          // const result = await qiitaApiGateway(httpClientFactory.createHttpClient.call).execute(
          method, url, params,
        );

        outputPort.outputSuccess(result);
      },
    };
  };

export default qiitaInteractor;


// const authorizeInteractor: IInputPort = (outputPort) => {
//   return {
//     execute: async (params): Promise<void> => {
//       const url = qiitaDomain.makeAuthorizationUrl();
//
//       outputPort.outputRedirection(url);
//     },
//   };
// };
//
// export default authorizeInteractor;
