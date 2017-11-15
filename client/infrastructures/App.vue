<template>
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
    </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import router from "./routes";

@Component<App>({
  router
})
export default class App extends Vue {}
</script>
