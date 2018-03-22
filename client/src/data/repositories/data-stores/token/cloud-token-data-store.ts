import { ITokenDataStore } from './token-data-store-interface';
import { AxiosResponse, AxiosError } from 'axios';
import httpClientFactory from '../../../api/http-client-factory';
import uuid from 'uuid/v4';

const cloudTokenDataStore = (): ITokenDataStore => {
  const httpClient = httpClientFactory.createHttpClient({
    baseURL: process.env.BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    issue: async (code): Promise<string> => {
      // const response = await httpClient.post('/token', params)
      const response = await httpClient.post('/rpc', {
        jsonrpc: '2.0',
        method: 'issueToken',
        params: { code },
        id: uuid(),
      })
        .then((response: AxiosResponse) => {
          console.log(response.data);

          const result = JSON.parse(response.data.result);
          return Promise.resolve(result.token);
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
