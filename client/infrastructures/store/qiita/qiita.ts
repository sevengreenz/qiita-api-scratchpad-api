import { ActionContext } from 'vuex';
import { getStoreAccessors } from 'vuex-typescript';
import { IState as IRootState } from '../state';
import { IQiitaState, IApiResponse/*, IApiParams*/ } from './qiita-state';
import QiitaActions from '../../../usecases/actions/qiita-actions';

// import ScratchpadApi from '../../../adapters/apis/scratchpad-api';
// import ScratchpadApiGateway from '../../../usecases/api-gateways/scratchpad-api-gateway';

export type QiitaContext = ActionContext<IQiitaState, IRootState>;

export const qiita = {
  namespaced: true,

  state: {
    apiResponse: '',
  },

  getters: {
    getApiResponse(state: IQiitaState): IApiResponse {
      return state.apiResponse;
    },
  },

  mutations: {
    setApiResponse(state: IQiitaState, apiReponse: IApiResponse) {
      state.apiResponse = apiReponse;
    },
  },

  actions: QiitaActions,
};

const { commit, read, dispatch } =
  getStoreAccessors<IQiitaState, IRootState>('qiita');


export const getApiResponse = read(qiita.getters.getApiResponse);
export const executeApi = dispatch(qiita.actions.executeApi);
export const commitApiResponse = commit(qiita.mutations.setApiResponse);

