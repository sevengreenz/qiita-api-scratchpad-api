import qiitaDomain from '../../../domain/qiita';
var setResources = function (state, resources) {
    state.resources = resources;
};
var setTargetResource = function (state, resource) {
    state.targetResource = resource;
};
var setTargetApi = function (state, api) {
    state.targetApi = api;
    // 変更後の API の初期パラメータ作成
    state.params = api.schema === undefined
        ? {}
        : qiitaDomain.makeApiParams(api.schema);
    // API 実行結果初期化
    state.apiResponse = qiitaDomain.createEmptyApiResponse();
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