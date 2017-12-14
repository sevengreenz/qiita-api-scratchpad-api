import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IApiResponse } from '../../domain/qiita';
import { IScratchpadApiGateway } from '../../usecases/contracts/scratchpad-api-gateway-interface';

const scratchpadApiGateway: IScratchpadApiGateway = (createHttpClient) => {
  return {
    executeQiitaApi: async (method, url, params): Promise<IApiResponse> => {
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
    },
  };
};

export default scratchpadApiGateway;
