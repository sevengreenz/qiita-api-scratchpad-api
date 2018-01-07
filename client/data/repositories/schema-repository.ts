import { ISchemaRepository } from '../../domain/repositories/schema-repository-interface';

const schemaRepository: ISchemaRepository = (createHttpClient) => {
  const httpClient = createHttpClient({
    baseURL: process.env.QIITA_URL,
  });

  return {
    find: async () => {
      const response = await httpClient.get('/schema?local=ja');

      return Object.values(response.data.properties);
    },
  };
};

export default schemaRepository;
