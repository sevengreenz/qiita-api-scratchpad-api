var _this = this;
import * as tslib_1 from "tslib";
import tokenRepository from '../../data/repositories/token-repository';
var tokenInteractor = {
    /**
     * アクセストークン 作成
     */
    create: function (code) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var token;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tokenRepository.issue(code)];
                case 1:
                    token = _a.sent();
                    tokenRepository.update(token);
                    return [2 /*return*/, token];
            }
        });
    }); },
};
export default tokenInteractor;
//# sourceMappingURL=token-interactor.js.map