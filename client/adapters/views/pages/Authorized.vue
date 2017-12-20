<template>
  <div>
    hoge moga
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import tokenInteractor from "../../../usecases/interactors/token-interactor";
import scratchpadApiGateway from "../../api-gateways/scratchpad-api-gateway";
import tokenStorageGateway from "../../storage-gateways/token-storage-gateway";
import session from "../../../infrastructures/session";

@Component({
  props: {
    code: String
  }
})
export default class Authorized extends Vue {
  code: string;

  mounted() {
    console.log(this.$route.query);
    console.log(this.display);
    console.log(this.code);

    tokenInteractor(
      scratchpadApiGateway,
      tokenStorageGateway(session())
    ).create(this.$route.query.code);
  }

  display() {
    console.log(this.code);
  }
}
</script>


