import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IApiResponse } from '../../domain/qiita';
import { IExecuteApi } from '../../usecases/contracts/scratchpad-api-interface';

const executeQiitaApi: IExecuteApi = (createHttpClient) => {
  return async (method, url, params): Promise<IApiResponse> => {
    const apiParams = {
      method,
      url,
      params,
    };

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response: AxiosResponse = await createHttpClient(config).post('/api', apiParams);
    const result: IApiResponse = {
      headers: response.headers,
      data: response.data,
    };

    return result;
  };
};

export default {
  executeQiitaApi,
};
