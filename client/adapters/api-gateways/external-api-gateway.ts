import { AxiosInstance, AxiosResponse } from 'axios';
import { IResource } from '../../domain/qiita';
import { IExternalApi } from '../../usecases/contracts/external-api-interface';

const findQiitaApiSchema: IExternalApi = (createHttpClient: () => AxiosInstance) => {
  return async (): Promise<IResource[]> => {
    const response: AxiosResponse = await createHttpClient().get('/schema?local=ja');

    return Object.values(response.data.properties);
  };
};

export default {
  findQiitaApiSchema,
};
