import Vue from 'vue';
import Vuetify from 'vuetify';
import HelloComponent from './components/Hello.vue';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  template: `
    <div>
        <v-app>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        </v-app>
    </div>`,
  data: {
    name: 'World',
  },
  components: {
    HelloComponent,
  },
});
