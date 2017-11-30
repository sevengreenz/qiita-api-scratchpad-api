import { ActionContext } from 'vuex';
import { getStoreAccessors } from 'vuex-typescript';
import { IState as IRootState } from '../state';
import qiitaDomain, { IQiitaState, IApiResponse, IResource, IApi } from '../../../domain/qiita';
import QiitaActions from '../../../usecases/actions/qiita-actions';
import QiitaGetters from '../../../usecases/getters/qiita-getters';

export type QiitaContext = ActionContext<IQiitaState, IRootState>;

export const qiita = {
  namespaced: true,

  state: qiitaDomain.createInitialState(),

  getters: QiitaGetters,

  mutations: {
    setResources(state: IQiitaState, resources: IResource[]) {
      state.resources = resources;
    },
    setTargetResource(state: IQiitaState, resource: IResource) {
      state.targetResource = resource;
    },
    setTargetApi(state: IQiitaState, api: IApi) {
      state.targetApi = api;

      // 変更後の API の初期パラメータ作成
      state.params = api.schema === undefined
        ? {}
        : qiitaDomain.makeApiParams(api.schema);

      // API 実行結果初期化
      state.apiResponse = undefined;
    },
    setApiResponse(state: IQiitaState, apiReponse: IApiResponse) {
      state.apiResponse = apiReponse;
    },
  },

  actions: QiitaActions,
};

const { commit, read, dispatch } =
  getStoreAccessors<IQiitaState, IRootState>('qiita');


export const getResources = read(qiita.getters.getResources);
export const getTargetResource = read(qiita.getters.getTargetResource);
export const getTargetApi = read(qiita.getters.getTargetApi);
export const getApiParams = read(qiita.getters.getApiParams);
export const getApiResponse = read(qiita.getters.getApiResponse);

export const fetchSchema = dispatch(qiita.actions.fetchSchema);
export const changeTargetResource = dispatch(qiita.actions.changeTargetResource);
export const changeTargetApi = dispatch(qiita.actions.changeTargetApi);
export const executeApi = dispatch(qiita.actions.executeApi);

export const commitResources = commit(qiita.mutations.setResources);
export const commitTargetResource = commit(qiita.mutations.setTargetResource);
export const commitTargetApi = commit(qiita.mutations.setTargetApi);
export const commitApiResponse = commit(qiita.mutations.setApiResponse);

