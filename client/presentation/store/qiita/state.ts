import { IApiResponse, IResource, IApi } from '../../../domain/qiita';

/**
 * Qiita State インターフェース
 */
export interface IQiitaState {
  resources: IResource[];
  targetResource: IResource;
  targetApi: IApi;
  dataParams: { [key: string]: any };
  apiResponse: IApiResponse;
}

const createEmptyApi = (): IApi => {
  return {
    title: '',
    description: '',
    href: '',
    method: '',
  };
};

const createEmptyApiResponse = (): IApiResponse => {
  return {
    headers: '',
    data: '',
  };
};

const createInitialState = (): IQiitaState => {
  return {
    resources: [],
    targetResource: {
      title: '',
      description: '',
      links: [],
      properties: {},
      required: [],
    },
    targetApi: createEmptyApi(),
    dataParams: {},
    apiResponse: createEmptyApiResponse(),
  };
};

export default {
  createInitialState,
  createEmptyApiResponse,
};
