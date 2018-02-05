var createInitialState = function () {
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
        params: {},
        apiResponse: createEmptyApiResponse(),
    };
};
var createEmptyApi = function () {
    return {
        title: '',
        description: '',
        href: '',
        method: '',
    };
};
var createEmptyApiResponse = function () {
    return {
        headers: '',
        data: '',
    };
};
var isEmptyApiResponse = function (apiResponse) {
    return apiResponse.headers === '' && apiResponse.data === '';
};
/**
 * undefined なプロパティを削除
 *
 * @param obj
 */
var removeUndefinedProperty = function (obj) {
    return Object.entries(obj).reduce(function (params, _a) {
        var key = _a[0], value = _a[1];
        if (value === undefined) {
            return params;
        }
        else {
            Object.assign(params, (_b = {}, _b[key] = value, _b));
            return params;
        }
        var _b;
    }, {});
};
/**
 * 実行 API のパラメータ作成
 *
 * @param ISchema schema
 */
var makeApiParams = function (schema) {
    return Object.keys(schema.properties).reduce(function (params, property) {
        return Object.assign(params, (_a = {}, _a[property] = undefined, _a));
        var _a;
    }, {});
};
export default {
    createInitialState: createInitialState,
    createEmptyApi: createEmptyApi,
    createEmptyApiResponse: createEmptyApiResponse,
    isEmptyApiResponse: isEmptyApiResponse,
    removeUndefinedProperty: removeUndefinedProperty,
    makeApiParams: makeApiParams,
};
//# sourceMappingURL=qiita.js.map