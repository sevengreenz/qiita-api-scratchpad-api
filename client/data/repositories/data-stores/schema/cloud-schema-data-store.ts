import { ISchemaDataStore } from './schema-data-store-interface';
import { AxiosResponse } from 'axios';
import { IResource } from '../../../../domain/qiita';
import httpClientFactory from '../../../api/http-client-factory';

const cloudSchemaDataStore = (): ISchemaDataStore => {
  const httpClient = httpClientFactory.createHttpClient({
    baseURL: process.env.QIITA_URL,
  });

  return {
    fetch: async (): Promise<IResource[]> => {
      return await httpClient
        .get('/schema?local=ja')
        .then((response: AxiosResponse) => Object.values(response.data.properties));
    },
  };
};

export default cloudSchemaDataStore;
