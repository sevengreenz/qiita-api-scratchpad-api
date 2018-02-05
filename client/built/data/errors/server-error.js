import * as tslib_1 from "tslib";
var ServerError = /** @class */ (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return ServerError;
}(Error));
export default ServerError;
//# sourceMappingURL=server-error.js.map