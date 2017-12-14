import { IExternalApiGateway } from '../../usecases/contracts/external-api-gateway-interface';

const externalApiGateway: IExternalApiGateway = (createHttpClient) => {
  return {
    findQiitaApiSchema: async () => {
      const response = await createHttpClient().get('/schema?local=ja');

      return Object.values(response.data.properties);
    },
  };
};

export default externalApiGateway;
