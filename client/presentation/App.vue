<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import router from "./routes";
import store from "./store/store";

@Component<App>({
  template: require("./views/layouts/base.html"),
  router,
  store
})
export default class App extends Vue {}
</script>
