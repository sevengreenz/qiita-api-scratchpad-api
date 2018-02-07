import { ActionContext } from 'vuex';
import { getStoreAccessors } from 'vuex-typescript';
import { IState as IRootState } from '../state';
import qiitaState, { IQiitaState } from './state';
import qiitaActions from './actions';
import qiitaGetters from './getters';
import qiitaMutations from './mutations';

export type QiitaContext = ActionContext<IQiitaState, IRootState>;

export const qiita = {
  namespaced: true,

  state: qiitaState.createInitialState(),

  getters: qiitaGetters,

  mutations: qiitaMutations,

  actions: qiitaActions,
};

const { commit, read, dispatch } =
  getStoreAccessors<IQiitaState, IRootState>('qiita');


export const getResources = read(qiita.getters.getResources);
export const getTargetResource = read(qiita.getters.getTargetResource);
export const getTargetApi = read(qiita.getters.getTargetApi);
export const getUrlParams = read(qiita.getters.getApiUrlParams);
export const getDataParams = read(qiita.getters.getApiDataParams);
export const getApiResponse = read(qiita.getters.getApiResponse);

export const fetchSchema = dispatch(qiita.actions.fetchSchema);
export const changeTargetResource = dispatch(qiita.actions.changeTargetResource);
export const changeTargetApi = dispatch(qiita.actions.changeTargetApi);
export const executeApi = dispatch(qiita.actions.executeApi);

export const commitResources = commit(qiita.mutations.setResources);
export const commitTargetResource = commit(qiita.mutations.setTargetResource);
export const commitTargetApi = commit(qiita.mutations.setTargetApi);
export const commitApiResponse = commit(qiita.mutations.setApiResponse);

