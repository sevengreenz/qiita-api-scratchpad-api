<template>
    <code>{{ result }}</code>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { IApiResponse } from "../../../../domain/qiita";

@Component({
  props: {
    result: Object
  }
})
export default class ApiResult extends Vue {
  result: IApiResponse;
}
</script>
