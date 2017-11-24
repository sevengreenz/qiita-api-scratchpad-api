import { ActionContext } from 'vuex';
import { getStoreAccessors } from 'vuex-typescript';
import { IState as IRootState } from '../state';
import qiitaDomain, { IQiitaState, IApiResponse, IResource, IApi } from '../../../domain/qiita';
import QiitaActions from '../../../usecases/actions/qiita-actions';

export type QiitaContext = ActionContext<IQiitaState, IRootState>;

export const qiita = {
  namespaced: true,

  state: qiitaDomain.createInitialState(),

  getters: {
    getResources(state: IQiitaState): IResource[] {
      return state.resources;
    },
    getTargetResource(state: IQiitaState): IResource {
      return state.targetResource;
    },
    getTargetApi(state: IQiitaState): IApi {
      return state.targetResource.links[0];
    },
    getApiParams(state: IQiitaState): object {
      return state.params;
    },
    getApiResponse(state: IQiitaState): IApiResponse | string {
      return state.apiResponse || '';
    },
  },

  mutations: {
    setResources(state: IQiitaState, resources: IResource[]) {
      state.resources = resources;
    },
    setTargetResource(state: IQiitaState, resource: IResource) {
      state.targetResource = resource;
    },
    setApiParams(state: IQiitaState, params: object) {
      state.params = params;
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
export const executeApi = dispatch(qiita.actions.executeApi);

export const commitResources = commit(qiita.mutations.setResources);
export const commitTargetResource = commit(qiita.mutations.setTargetResource);
export const commitApiParams = commit(qiita.mutations.setApiParams);
export const commitApiResponse = commit(qiita.mutations.setApiResponse);

