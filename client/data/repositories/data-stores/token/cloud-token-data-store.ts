import { ITokenDataStore } from './token-data-store-interface';
import { AxiosResponse, AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

type createHttpClient = (config: AxiosRequestConfig) => AxiosInstance;

const cloudTokenDataStore =
  (createHttpClient: createHttpClient): ITokenDataStore => {

    const httpClient = createHttpClient({
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
