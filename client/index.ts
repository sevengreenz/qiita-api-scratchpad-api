import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './infrastructures/App.vue';

Vue.use(Vuetify);

const vm = new App();
vm.$mount('#app');
