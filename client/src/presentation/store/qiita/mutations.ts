import qiitaFunc, { IResource, IApi, IApiResponse } from '../../../domain/qiita';
import qiitaState, { IQiitaState } from './state';

const setResources = (state: IQiitaState, resources: IResource[]) => {
  state.resources = resources;
};

const setTargetResource = (state: IQiitaState, resource: IResource) => {
  state.targetResource = resource;
};

const setTargetApi = (state: IQiitaState, api: IApi) => {
  state.targetApi = api;

  // 変更後の API の初期 URL パラメータ作成
  state.urlParams = qiitaFunc.extractUrlParams(api.href);

  // 変更後の API の初期データパラメータ作成
  state.dataParams = api.schema === undefined
    ? {}
    : qiitaFunc.makeApiParams(api.schema);

  // API 実行結果初期化
  state.apiResponse = qiitaState.createEmptyApiResponse();
};

const setApiResponse = (state: IQiitaState, apiReponse: IApiResponse) => {
  state.apiResponse = apiReponse;
};

export default {
  setResources,
  setTargetResource,
  setTargetApi,
  setApiResponse,
};
