<template>
  <div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import tokenInteractor from "../../../domain/interactors/token-interactor";

@Component
export default class Authorized extends Vue {
  beforeCreate() {
    tokenInteractor
      .create(this.$route.query.code)
      .then(() => this.$router.push("/"));
  }
}
</script>


