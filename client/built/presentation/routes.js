import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/pages/Index.vue';
import Authorized from './views/pages/Authorized.vue';
Vue.use(VueRouter);
var options = {
    mode: 'history',
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index,
        },
        {
            name: 'authorized',
            path: '/authorized',
            component: Authorized,
        },
    ],
};
var router = new VueRouter(options);
export default router;
//# sourceMappingURL=routes.js.map