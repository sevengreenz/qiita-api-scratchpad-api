var _this = this;
import * as tslib_1 from "tslib";
import httpClientFactory from '../../../api/http-client-factory';
var cloudSchemaDataStore = function () {
    var httpClient = httpClientFactory.createHttpClient({
        baseURL: process.env.QIITA_URL,
    });
    return {
        fetch: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpClient
                            .get('/schema?local=ja')
                            .then(function (response) { return Object.values(response.data.properties); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
    };
};
export default cloudSchemaDataStore;
//# sourceMappingURL=cloud-schema-data-store.js.map