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
        Object.assign(params, (_b = {}, _b[key] = value, _b));
        return params;
        var _b;
    }, {});
};
/**
 * スキーマの href からパラメータを抽出する
 *
 * @param href
 */
var extractUrlParams = function (href) {
    var req = /:(\w+)(?:\/|$)/g;
    var params = {};
    var key;
    while ((key = req.exec(href)) !== null) {
        params = Object.assign(params, (_a = {}, _a[key[1]] = undefined, _a));
    }
    return params;
    var _a;
};
/**
 * URL パラメータを URL に埋め込む
 *
 * @param href
 * @param urlParams
 */
var embedUrlParams = function (href, urlParams) {
    return Object.entries(urlParams).reduce(function (embededHref, _a) {
        var key = _a[0], value = _a[1];
        return embededHref.replace(":" + key, (value || '').toString());
    }, href);
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
    isEmptyApiResponse: isEmptyApiResponse,
    removeUndefinedProperty: removeUndefinedProperty,
    extractUrlParams: extractUrlParams,
    embedUrlParams: embedUrlParams,
    makeApiParams: makeApiParams,
};
//# sourceMappingURL=qiita.js.map