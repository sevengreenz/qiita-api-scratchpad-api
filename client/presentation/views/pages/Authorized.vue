<template>
  <div>
    hoge moga
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import tokenInteractor from "../../../domain/interactors/token-interactor";
import scratchpadApiGateway from "../../../data/repositories/qiita-repository";
import tokenStorageGateway from "../../../data/repositories/token-repository";

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
      tokenStorageGateway()
    ).create(this.$route.query.code);
  }

  display() {
    console.log(this.code);
  }
}
</script>


