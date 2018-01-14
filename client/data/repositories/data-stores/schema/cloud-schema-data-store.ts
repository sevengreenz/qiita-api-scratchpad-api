import { ISchemaDataStore } from './schema-data-store-interface';
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { IResource } from '../../../../domain/qiita';

type createHttpClient = (config: AxiosRequestConfig) => AxiosInstance;

const cloudSchemaDataStore =
  (createHttpClient: createHttpClient): ISchemaDataStore => {

    const httpClient = createHttpClient({
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
