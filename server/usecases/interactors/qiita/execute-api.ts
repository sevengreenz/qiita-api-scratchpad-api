import IInputPort from '../../contracts/input-port-interface';
import IQiitaApiGateway from '../../contracts/qiita-api-gateway-interface';
import httpClientFactory from '../http-client-factory';
import { IQiitaApiResponse } from '../../../domain/qiita-domain';

const executeApiInteractor: IInputPort = (outputPort, qiitaApiGateway: IQiitaApiGateway) => {
  return {
    execute: async (params: any): Promise<void> => {
      const createHttpClient = () => httpClientFactory.createHttpClient;

      const result: IQiitaApiResponse = await qiitaApiGateway(createHttpClient()).execute(
        params.method, params.url, params.params,
      );

      outputPort.outputSuccess(result);
    },
  };
};

export default executeApiInteractor;
