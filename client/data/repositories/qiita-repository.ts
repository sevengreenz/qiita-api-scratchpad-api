import { AxiosResponse, AxiosError } from 'axios';
import { IApiResponse } from '../../domain/qiita';
import errorFactory from '../errors/error-factory';
import { IQiitaRepository } from '../../domain/repositories/qiita-repository-interface';

const qiitaRepository: IQiitaRepository = (createHttpClient) => {
  const httpClient = createHttpClient({
    baseURL: process.env.BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    executeQiitaApi: async (method, url, params): Promise<IApiResponse> => {
      const apiParams = {
        method,
        url,
        params,
      };

      const result: IApiResponse = await httpClient.post('/api', apiParams)
        .then((response: AxiosResponse) => {
          return Promise.resolve({
            headers: response.headers,
            data: response.data,
          });
        })
        .catch((error: AxiosError) => {
          if (error.response === undefined) return Promise.reject(error);

          if (error.response.status === 401) return Promise.reject(error);

          // 401 以外は正常として扱う
          return Promise.resolve({
            headers: error.response.headers,
            data: error.response.data,
          });
        })
        .catch(errorFactory.throwError);

      return result;
    },

    issueToken: async (code): Promise<any> => {
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

  };
};

export default qiitaRepository;
