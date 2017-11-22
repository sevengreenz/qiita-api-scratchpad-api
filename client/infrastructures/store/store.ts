import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { qiita } from './qiita';
import { IState } from './state';

Vue.use(Vuex);

const modules: ModuleTree<any> = {
  qiita,
};

const store = new Vuex.Store<IState>({
  modules,
});

export default store;
