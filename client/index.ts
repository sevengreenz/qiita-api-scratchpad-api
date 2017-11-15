import Vue from 'vue';
import Vuetify from 'vuetify';
import router from './infrastructures/routes';

Vue.use(Vuetify);

const vm = new Vue({
  router,
  template: `
    <div>
       <v-app>
         <v-toolbar class="light-green" dark fixed>
           <v-toolbar-title>Qiita API Scratchpad</v-toolbar-title>
         </v-toolbar>
         <main>
           <v-container fluid>
             <router-view></router-view>
           </v-container>
         </main>
         <v-footer class="light-green"></v-footer>
       </v-app>
   </div>`,
});
vm.$mount('#app');
// new Vue({
//   router,
//   el: '#app',
//   template: `
//     <div>
//         <v-app>
//           <v-toolbar class="light-green" dark fixed>
//             <v-toolbar-title>Qiita API Scratchpad</v-toolbar-title>
//           </v-toolbar>
//           <main>
//             <v-container fluid>
//               <hello-component :name="name" :initialEnthusiasm="5" />
//             </v-container>
//           </main>
//           <v-footer class="light-green"></v-footer>
//         </v-app>
//     </div>`,
//   data: {
//     name: 'World',
//   },
//   components: {
//     HelloComponent,
//   },
// });
