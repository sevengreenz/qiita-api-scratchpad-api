import { IResource, IApi, IApiResponse } from '../../../domain/qiita';
import { IQiitaState } from './state';

const getResources = (state: IQiitaState): IResource[] => {
  return state.resources;
};

const getTargetResource = (state: IQiitaState): IResource => {
  return state.targetResource;
};

const getTargetApi = (state: IQiitaState): IApi => {
  return state.targetApi;
};

const getApiDataParams = (state: IQiitaState): object => {
  return state.dataParams;
};

const getApiResponse = (state: IQiitaState): IApiResponse => {
  return state.apiResponse;
};

export default {
  getResources,
  getTargetResource,
  getTargetApi,
  getApiDataParams,
  getApiResponse,
};
