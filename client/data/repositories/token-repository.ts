import { ITokenRepository } from '../../domain/repositories/token-repository-interface';
import { AxiosResponse, AxiosError } from 'axios';

const tokenStorageGateway: ITokenRepository = (createHttpClient) => {

  const httpClient = createHttpClient({
    baseURL: process.env.BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });


  const key = 'access_token';

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

    get: () => {
      return sessionStorage.getItem(key);
    },

    set: (token) => {
      sessionStorage.setItem(key, token);
    },
  };
};

export default tokenStorageGateway;
