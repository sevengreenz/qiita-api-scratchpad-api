<template>
    <code v-show="! isShow">{{ result }}</code>
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
    return qiitaDomain.isEmptyApiResponse(this.result);
  }
}
</script>
