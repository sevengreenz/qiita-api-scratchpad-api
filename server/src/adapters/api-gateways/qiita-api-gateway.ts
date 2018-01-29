import { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import IQiitaApiGateway from '../../usecases/contracts/qiita-api-gateway-interface';
import { IQiitaApiResponse } from '../../domain/qiita-domain';

// 別ファイルに分離
const qiitqApi = (httpClient: AxiosInstance) => {
  const convertApiResponse = (response: AxiosResponse): IQiitaApiResponse => {
    return {
      status: response.status,
      data: response.data,
      headers: response.headers,
    };
  };

  return {
    request: (config: AxiosRequestConfig): Promise<IQiitaApiResponse> => {
      return httpClient.request(config)
        .then((response: AxiosResponse) => {
          console.log('Request Success, response: ');
          console.dir(response);

          return Promise.resolve(convertApiResponse(response));
        })
        .catch((error: AxiosError) => {
          console.log(error);
          const failure = error.response === undefined
            ? {
              status: 500,
              data: 'no response',
              headers: {},
            }
            : convertApiResponse(error.response);

          return Promise.reject(failure);
        });
    },
  };
};

const qiitaApiGateway: IQiitaApiGateway = (createHttpClient) => {
  const httpClient = createHttpClient({
    baseURL: 'http://qiita.com',
  });

  const qiitaApi = qiitqApi(httpClient);

  return {
    execute: async (method, url, params, token) => {
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

      if (token !== '') requestConfig.headers = Object.assign(requestConfig.headers, { Authorization: `Bearer ${token}` });

      return qiitaApi.request(requestConfig);
    },

    issueToken: async (code: string) => {
      const data = {
        code,
        client_id: process.env.CLIENT_ID || '',
        client_secret: process.env.CLIENT_SECRET || '',
      };

      const result = await qiitaApi.request({
        data,
        method: 'POST',
        url: '/api/v2/access_tokens',
      });

      const token: string = result.data.token;

      return token;
    },

  };
};

export default qiitaApiGateway;
