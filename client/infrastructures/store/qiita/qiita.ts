import { ActionContext } from 'vuex';
import { getStoreAccessors } from 'vuex-typescript';
import { IState as IRootState } from '../state';
import { IQiitaState, IApiResponse, IApiParams } from './qiita-state';

// import ScratchpadApi from '../../../adapters/apis/scratchpad-api';
// import ScratchpadApiGateway from '../../../usecases/api-gateways/scratchpad-api-gateway';
import axios from 'axios';
import QiitaData from '../../../data/qiita-data';
import util from '../../../util';

type QiitaContext = ActionContext<IQiitaState, IRootState>;

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

  actions: {
    async executeApi(context: QiitaContext, params: IApiParams): Promise<void> {
      // 値がアサインされていないプロパティを削除
      const convertedParams = util.removeUndefinedProperty(params.properties);

      const data: QiitaData = new QiitaData(axios);
      const result: any = await data.execute(params.api.method, params.api.href, convertedParams);

      commitApiResponse(context, result);
      // return result;
    },
  },
};

const { commit, read, dispatch } =
  getStoreAccessors<IQiitaState, IRootState>('qiita');


export const getApiResponse = read(qiita.getters.getApiResponse);
export const executeApi = dispatch(qiita.actions.executeApi);
export const commitApiResponse = commit(qiita.mutations.setApiResponse);

