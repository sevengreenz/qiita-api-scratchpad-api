var _this = this;
import * as tslib_1 from "tslib";
import schemaDataStoreFactory from './data-stores/schema/schema-data-store-factory';
var schemaRepository = {
    fetch: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, schemaDataStoreFactory
                        .createCloudDataStore()
                        .fetch()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
};
export default schemaRepository;
//# sourceMappingURL=schema-repository.js.map