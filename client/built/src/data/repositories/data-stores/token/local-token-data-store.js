var _this = this;
import * as tslib_1 from "tslib";
var localTokenDataStore = function () {
    var key = 'access_token';
    return {
        issue: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw Error('Not Implemented');
            });
        }); },
        find: function () {
            return sessionStorage.getItem(key);
        },
        update: function (token) {
            sessionStorage.setItem(key, token);
        },
    };
};
export default localTokenDataStore;
//# sourceMappingURL=local-token-data-store.js.map