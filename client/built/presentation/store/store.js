import Vue from 'vue';
import Vuex from 'vuex';
import { qiita } from './qiita';
Vue.use(Vuex);
var modules = {
    qiita: qiita,
};
var store = new Vuex.Store({
    modules: modules,
});
export default store;
//# sourceMappingURL=store.js.map