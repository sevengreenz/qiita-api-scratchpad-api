import { getStoreAccessors } from 'vuex-typescript';
import qiitaDomain from '../../../domain/qiita';
import qiitaActions from './actions';
import qiitaGetters from './getters';
import qiitaMutations from './mutations';
export var qiita = {
    namespaced: true,
    state: qiitaDomain.createInitialState(),
    getters: qiitaGetters,
    mutations: qiitaMutations,
    actions: qiitaActions,
};
var _a = getStoreAccessors('qiita'), commit = _a.commit, read = _a.read, dispatch = _a.dispatch;
export var getResources = read(qiita.getters.getResources);
export var getTargetResource = read(qiita.getters.getTargetResource);
export var getTargetApi = read(qiita.getters.getTargetApi);
export var getApiParams = read(qiita.getters.getApiParams);
export var getApiResponse = read(qiita.getters.getApiResponse);
export var fetchSchema = dispatch(qiita.actions.fetchSchema);
export var changeTargetResource = dispatch(qiita.actions.changeTargetResource);
export var changeTargetApi = dispatch(qiita.actions.changeTargetApi);
export var executeApi = dispatch(qiita.actions.executeApi);
export var commitResources = commit(qiita.mutations.setResources);
export var commitTargetResource = commit(qiita.mutations.setTargetResource);
export var commitTargetApi = commit(qiita.mutations.setTargetApi);
export var commitApiResponse = commit(qiita.mutations.setApiResponse);
//# sourceMappingURL=qiita.js.map