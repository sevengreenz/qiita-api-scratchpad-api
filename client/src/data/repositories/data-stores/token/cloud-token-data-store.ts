import { ITokenDataStore } from './token-data-store-interface';
import { AxiosResponse, AxiosError } from 'axios';
import httpClientFactory from '../../../api/http-client-factory';

const cloudTokenDataStore = (): ITokenDataStore => {
  const httpClient = httpClientFactory.createHttpClient({
    baseURL: process.env.BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    issue: async (code): Promise<string> => {
      const params = { code };

      const response = await httpClient.post('/token', params)
        .then((response: AxiosResponse) => {
          console.log(response.data);

          return Promise.resolve(response.data);
        })
        .catch((error: AxiosError) => {
          console.log(error);

          return Promise.reject(error);
        });

      return response;
    },

    find: () => {
      throw Error('Not Implemented');
    },

    update: () => {
      throw Error('Not Implemented');
    },

  };
};

export default cloudTokenDataStore;
