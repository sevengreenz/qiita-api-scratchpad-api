var getResources = function (state) {
    return state.resources;
};
var getTargetResource = function (state) {
    return state.targetResource;
};
var getTargetApi = function (state) {
    return state.targetApi;
};
var getApiUrlParams = function (state) {
    return state.urlParams;
};
var getApiDataParams = function (state) {
    return state.dataParams;
};
var getApiResponse = function (state) {
    return state.apiResponse;
};
export default {
    getResources: getResources,
    getTargetResource: getTargetResource,
    getTargetApi: getTargetApi,
    getApiUrlParams: getApiUrlParams,
    getApiDataParams: getApiDataParams,
    getApiResponse: getApiResponse,
};
//# sourceMappingURL=getters.js.map