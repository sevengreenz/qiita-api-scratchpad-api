import { IExternalApiGateway } from '../../usecases/contracts/external-api-gateway-interface';

const externalApiGateway: IExternalApiGateway = (createHttpClient) => {
  const httpClient = createHttpClient({
    baseURL: process.env.QIITA_URL,
  });

  return {
    findQiitaApiSchema: async () => {
      const response = await httpClient.get('/schema?local=ja');

      return Object.values(response.data.properties);
    },
  };
};

export default externalApiGateway;
