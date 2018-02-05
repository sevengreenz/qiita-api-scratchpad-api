import * as tslib_1 from "tslib";
var UnAuthorizedError = /** @class */ (function (_super) {
    tslib_1.__extends(UnAuthorizedError, _super);
    function UnAuthorizedError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return UnAuthorizedError;
}(Error));
export default UnAuthorizedError;
//# sourceMappingURL=unauthorized-error.js.map