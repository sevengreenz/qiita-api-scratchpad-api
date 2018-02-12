import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/pages/Index.vue';
import Authorized from './views/pages/Authorized.vue';
import { RouterOptions } from 'vue-router/types/router';

Vue.use(VueRouter);

const options: RouterOptions = {
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

const router = new VueRouter(options);

export default router;
