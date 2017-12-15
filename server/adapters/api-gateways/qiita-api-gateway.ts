import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import IQiitaApiGateway from '../../usecases/contracts/qiita-api-gateway-interface';
import { IQiitaApiResponse } from '../../domain/qiita-domain';

const qiitaApiGateway: IQiitaApiGateway = (createHttpClient) => {
  const httpClient = createHttpClient({
    baseURL: 'http://qiita.com',
  });

  return {
    execute: async (method, url, params) => {
      const requestConfig: AxiosRequestConfig = {
        method,
        url,
      };

      switch (method) {
        case 'GET':
          requestConfig.params = params;
          requestConfig.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
          break;
        case 'POST':
        case 'PUT':
        case 'DELETE':
          requestConfig.data = params;
          requestConfig.headers = { 'Content-Type': 'application/json' };
          break;
        default:
        // TODO: throw Error
      }

      return httpClient.request(requestConfig)
        .then((response: AxiosResponse) => {
          const result: IQiitaApiResponse = {
            status: response.status,
            data: response.data,
            headers: response.headers,
          };

          return Promise.resolve(result);
        })
        .catch((error: AxiosError) => {
          let failure: IQiitaApiResponse;

          if (error.response === undefined) {
            failure = {
              status: 500,
              data: 'no response',
              headers: {},
            };
          } else {
            failure = {
              status: error.response.status,
              data: error.response.data,
              headers: error.response.headers,
            };
          }

          return Promise.reject(failure);
        });
    },
  };
};

export default qiitaApiGateway;
