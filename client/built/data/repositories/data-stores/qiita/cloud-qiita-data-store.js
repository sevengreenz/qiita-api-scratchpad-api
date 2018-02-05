var _this = this;
import * as tslib_1 from "tslib";
import errorFactory from '../../../errors/error-factory';
import tokenRepository from '../../token-repository';
import httpClientFactory from '../../../api/http-client-factory';
var cloudQiitaDataStore = function () {
    var httpClient = httpClientFactory.createHttpClient({
        baseURL: process.env.BASE_API_URL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + (tokenRepository.find() || ''),
        },
    });
    return {
        execute: function (method, url, params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpClient.post('/api', { method: method, url: url, params: params })
                            .then(function (response) {
                            return Promise.resolve({
                                headers: response.headers,
                                data: response.data,
                            });
                        })
                            .catch(function (error) {
                            if (error.response === undefined)
                                return Promise.reject(error);
                            if (error.response.status === 401)
                                return Promise.reject(error);
                            // 401 以外は正常として扱う
                            return Promise.resolve({
                                headers: error.response.headers,
                                data: error.response.data,
                            });
                        })
                            .catch(errorFactory.throwError)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); },
    };
};
export default cloudQiitaDataStore;
//# sourceMappingURL=cloud-qiita-data-store.js.map