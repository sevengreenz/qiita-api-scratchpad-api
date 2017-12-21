<template>
    <v-layout v-show="isShow" row wrap>
        <code>{{ result }}</code>
    </v-layout>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import qiitaDomain, { IApiResponse } from "../../../../domain/qiita";

@Component({
  props: {
    result: Object
  }
})
export default class ApiResult extends Vue {
  result: IApiResponse;

  get isShow(): boolean {
    return ! qiitaDomain.isEmptyApiResponse(this.result);
  }
}
</script>
