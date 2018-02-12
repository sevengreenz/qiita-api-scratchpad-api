var _this = this;
import * as tslib_1 from "tslib";
import schemaRepository from '../../data/repositories/schema-repository';
var schemaInteractor = {
    /**
     * Qiita API Schema 取得
     */
    fetch: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, schemaRepository.fetch()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
};
export default schemaInteractor;
//# sourceMappingURL=schema-interactor.js.map