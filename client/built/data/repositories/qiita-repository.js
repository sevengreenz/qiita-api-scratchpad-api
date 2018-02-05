var _this = this;
import * as tslib_1 from "tslib";
import qiitaDataStoreFactory from './data-stores/qiita/qiita-data-store-factory';
var qiitaRepository = {
    execute: function (method, url, params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, qiitaDataStoreFactory
                        .createCloudDataStore()
                        .execute(method, url, params)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
};
export default qiitaRepository;
//# sourceMappingURL=qiita-repository.js.map