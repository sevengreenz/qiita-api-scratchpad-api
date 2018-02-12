<template>
  <div>
    <v-card class="grey lighten-4 evaluation-0">
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-select v-bind:items="resources" v-model="targetResource" v-on:change="changeResource($event)" item-text="title" item-value="title" return-object :hint="`${targetResource.description}`" persistent-hint label="Resource" bottom>
            </v-select>
          </v-layout>
          <v-layout row wrap>
            <v-select v-bind:items="targetResource.links" v-model="targetApi" item-text="title" item-value="title" v-on:change="changeApi($event)" return-object :hint="`${targetApi.description}`" persistent-hint label="API" bottom></v-select>
          </v-layout>

          <api-url-param :params="urlParams"></api-url-param>

          <api-data-param :api="targetApi" :params="dataParams"></api-data-param>

          <v-btn color="primary" dark v-on:click="execute">Exec</v-btn>
          <unauthorized-error :isShow="hasError" :onDisagree="hideError"></unauthorized-error>
          <api-result :result="result"></api-result>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import ApiUrlParam from "../components/qiita/ApiUrlParam.vue";
import ApiDataParam from "../components/qiita/ApiDataParam.vue";
import ApiResult from "../components/qiita/ApiResult.vue";
import { IResource, IApi, IApiParams, IUrlParams } from "../../../domain/qiita";
import * as qiitaStore from "../../store/qiita";
import UnauthorizedError from "../../../data/errors/unauthorized-error";
import UnauthorizedErrorComponent from "../components/common/UnauthorizedError.vue";

@Component({
  components: {
    "api-url-param": ApiUrlParam,
    "api-data-param": ApiDataParam,
    "unauthorized-error": UnauthorizedErrorComponent,
    "api-result": ApiResult
  },
  props: {}
})
export default class Index extends Vue {
  hasError: boolean = false;

  async created() {
    qiitaStore.fetchSchema(this.$store);
  }

  get resources(): IResource[] {
    return qiitaStore.getResources(this.$store);
  }

  get targetResource(): IResource {
    return qiitaStore.getTargetResource(this.$store);
  }

  get targetApi(): IApi {
    return qiitaStore.getTargetApi(this.$store);
  }

  get urlParams(): IUrlParams {
    return qiitaStore.getUrlParams(this.$store);
  }

  get dataParams(): object {
    return qiitaStore.getDataParams(this.$store);
  }

  get result() {
    return qiitaStore.getApiResponse(this.$store);
  }

  /**
   * リソース変更イベント
   *
   * @param IResource $event
   */
  changeResource($event: IResource) {
    qiitaStore.changeTargetResource(this.$store, $event);
  }

  /**
   * API 変更イベント
   *
   * @param IApi $event
   */
  changeApi($event: IApi): void {
    qiitaStore.changeTargetApi(this.$store, $event);
  }

  async execute(): Promise<void> {
    console.log(this.dataParams);
    const apiParams: IApiParams = {
      api: this.targetApi,
      urlParams: this.urlParams,
      dataParams: this.dataParams
    };

    await qiitaStore.executeApi(this.$store, apiParams).catch((e: Error) => {
      if (e instanceof UnauthorizedError) {
        this.hasError = true;
      }
      // TODO: modal で表示
      console.log(e);
    });
  }

  hideError(): void {
    this.hasError = false;
  }
}
</script>
