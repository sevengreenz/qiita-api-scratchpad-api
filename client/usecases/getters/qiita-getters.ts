import { IQiitaState, IResource, IApi, IApiResponse } from '../../domain/qiita';

const getResources = (state: IQiitaState): IResource[] => {
  return state.resources;
};

const getTargetResource = (state: IQiitaState): IResource => {
  return state.targetResource;
};

const getTargetApi = (state: IQiitaState): IApi => {
  return state.targetApi;
};

const getApiParams = (state: IQiitaState): object => {
  return state.params;
};

const getApiResponse = (state: IQiitaState): IApiResponse | string => {
  return state.apiResponse || '';
};

export default {
  getResources,
  getTargetResource,
  getTargetApi,
  getApiParams,
  getApiResponse,
};
