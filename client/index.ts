import Vue from 'vue';
import Vuetify from 'vuetify';
import HelloComponent from './components/Hello.vue';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  template: `
    <div>
        <v-app>
          <v-toolbar class="light-green" dark fixed>
            <v-toolbar-title>Qiita API Client</v-toolbar-title>
          </v-toolbar>
          <main>
            <v-container fluid>
              <div>Hello {{name}}!</div>
              Name: <input v-model="name" type="text">
              <hello-component :name="name" :initialEnthusiasm="5" />
            </v-container>
          </main>
          <v-footer class="light-green"></v-footer>
        </v-app>
    </div>`,
  data: {
    name: 'World',
  },
  components: {
    HelloComponent,
  },
});
