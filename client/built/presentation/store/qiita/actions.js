var _this = this;
import * as tslib_1 from "tslib";
import { commitApiResponse, commitResources, commitTargetResource, commitTargetApi, getTargetResource, getTargetApi, } from './qiita';
import schemaInteractor from '../../../domain/interactors/schema-interactor';
import qiitaInteractor from '../../../domain/interactors/qiita-interactor';
import executedInteractor from '../../../domain/interactors/executed-interactor';
var fetchSchema = function (context) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, schemaInteractor
                    .fetch()
                    .then(function (resources) {
                    commitResources(context, resources);
                    // session に保存されていた場合、targetResource にセットする
                    var executed = executedInteractor.getLastExecuteApi();
                    if (executed !== null) {
                        commitTargetResource(context, executed.resource);
                        commitTargetApi(context, executed.api);
                    }
                    else {
                        commitTargetResource(context, resources[0]);
                        commitTargetApi(context, resources[0].links[0]);
                    }
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var changeTargetResource = function (context, resource) {
    commitTargetResource(context, resource);
};
var changeTargetApi = function (context, api) {
    commitTargetApi(context, api);
};
/**
 * API を実行する
 *
 * @param {QiitaContext} context
 */
var executeApi = function (context, params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, qiitaInteractor
                    .executeApi({
                    params: params,
                    resource: getTargetResource(context),
                    api: getTargetApi(context),
                }).then(function (response) {
                    commitApiResponse(context, response);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
export default {
    fetchSchema: fetchSchema,
    changeTargetResource: changeTargetResource,
    changeTargetApi: changeTargetApi,
    executeApi: executeApi,
};
//# sourceMappingURL=actions.js.map