import qiitaFunc from '../../../domain/qiita';
import qiitaState from './state';
var setResources = function (state, resources) {
    state.resources = resources;
};
var setTargetResource = function (state, resource) {
    state.targetResource = resource;
};
var setTargetApi = function (state, api) {
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
var setApiResponse = function (state, apiReponse) {
    state.apiResponse = apiReponse;
};
export default {
    setResources: setResources,
    setTargetResource: setTargetResource,
    setTargetApi: setTargetApi,
    setApiResponse: setApiResponse,
};
//# sourceMappingURL=mutations.js.map