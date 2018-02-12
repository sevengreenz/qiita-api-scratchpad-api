var _this = this;
import * as tslib_1 from "tslib";
import tokenDataStoreFactory from './data-stores/token/token-data-store-factory';
var tokenRepository = {
    issue: function (code) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tokenDataStoreFactory
                        .createCloudDataStore()
                        .issue(code)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    find: function () {
        return tokenDataStoreFactory
            .createLocalDataStore()
            .find();
    },
    update: function (token) {
        return tokenDataStoreFactory
            .createLocalDataStore()
            .update(token);
    },
};
export default tokenRepository;
//# sourceMappingURL=token-repository.js.map