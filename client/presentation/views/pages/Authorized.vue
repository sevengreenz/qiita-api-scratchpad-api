<template>
  <div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import tokenInteractor from "../../../domain/interactors/token-interactor";
import tokenRepository from "../../../data/repositories/token-repository";
import tokenDataStoreFactory from "../../../data/repositories/data-stores/token/token-data-store-factory";

@Component
export default class Authorized extends Vue {
  beforeCreate() {
    tokenInteractor(tokenRepository(tokenDataStoreFactory))
      .create(this.$route.query.code)
      .then(() => this.$router.push('/'));
  }
}
</script>


