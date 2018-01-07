import qiitaDomain, { IQiitaState, IResource, IApi, IApiResponse } from '../../../domain/qiita';

const setResources = (state: IQiitaState, resources: IResource[]) => {
  state.resources = resources;
};

const setTargetResource = (state: IQiitaState, resource: IResource) => {
  state.targetResource = resource;
};

const setTargetApi = (state: IQiitaState, api: IApi) => {
  state.targetApi = api;

  // 変更後の API の初期パラメータ作成
  state.params = api.schema === undefined
    ? {}
    : qiitaDomain.makeApiParams(api.schema);

  // API 実行結果初期化
  state.apiResponse = qiitaDomain.createEmptyApiResponse();
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
