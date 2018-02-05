var _this = this;
import * as tslib_1 from "tslib";
import httpClientFactory from '../../../api/http-client-factory';
var cloudTokenDataStore = function () {
    var httpClient = httpClientFactory.createHttpClient({
        baseURL: process.env.BASE_API_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return {
        issue: function (code) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var params, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { code: code };
                        return [4 /*yield*/, httpClient.post('/token', params)
                                .then(function (response) {
                                console.log(response.data);
                                return Promise.resolve(response.data);
                            })
                                .catch(function (error) {
                                console.log(error);
                                return Promise.reject(error);
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); },
        find: function () {
            throw Error('Not Implemented');
        },
        update: function () {
            throw Error('Not Implemented');
        },
    };
};
export default cloudTokenDataStore;
//# sourceMappingURL=cloud-token-data-store.js.map