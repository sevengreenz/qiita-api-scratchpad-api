var _this = this;
import * as tslib_1 from "tslib";
import qiitaRepository from '../../data/repositories/qiita-repository';
import qiita from '../qiita';
import executedRepository from '../../data/repositories/executed-repository';
var qiitaInteractor = {
    /**
     * Qiita API 実行
     */
    executeApi: function (api) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, qiitaRepository
                        .execute(api.api.method, api.api.href, qiita.removeUndefinedProperty(api.params.properties))
                        .catch(function (error) {
                        // TODO: 成功時にセッションから削除
                        executedRepository.setExecuted(api);
                        return Promise.reject(error);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
};
export default qiitaInteractor;
//# sourceMappingURL=qiita-interactor.js.map