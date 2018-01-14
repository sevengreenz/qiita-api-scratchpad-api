import { IQiitaDataStore } from './qiita-data-store-interface';
import { AxiosResponse, AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { IApiResponse } from '../../../../domain/qiita';
import errorFactory from '../../../errors/error-factory';

type createHttpClient = (config: AxiosRequestConfig) => AxiosInstance;

const cloudQiitaDataStore =
  (createHttpClient: createHttpClient): IQiitaDataStore => {

    const httpClient = createHttpClient({
      baseURL: process.env.BASE_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      execute: async (method, url, params): Promise<IApiResponse> => {
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

    };
  };

export default cloudQiitaDataStore;
