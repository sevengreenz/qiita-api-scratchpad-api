var getResources = function (state) {
    return state.resources;
};
var getTargetResource = function (state) {
    return state.targetResource;
};
var getTargetApi = function (state) {
    return state.targetApi;
};
var getApiParams = function (state) {
    return state.params;
};
var getApiResponse = function (state) {
    return state.apiResponse;
};
export default {
    getResources: getResources,
    getTargetResource: getTargetResource,
    getTargetApi: getTargetApi,
    getApiParams: getApiParams,
    getApiResponse: getApiResponse,
};
//# sourceMappingURL=getters.js.map