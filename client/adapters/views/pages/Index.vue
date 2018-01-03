<template>
  <div>
    <v-card class="grey lighten-4 evaluation-0">
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-select v-bind:items="resources" v-model="resource" v-on:change="changeResource($event)" item-text="title" item-value="title" return-object :hint="`${resource.description}`" persistent-hint label="Resource" bottom></v-select>
          </v-layout>
          <v-layout row wrap>
            <v-select v-bind:items="resource.links" v-model="api" item-text="title" v-on:change="changeApi($event)" return-object :hint="`${api.description}`" persistent-hint label="API" bottom></v-select>
          </v-layout>
          <api-property :api="apis" :params="params"></api-property>
          <api-result :result="result"></api-result>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import ApiProperty from "../components/qiita/ApiProperty";
import ApiResult from "../components/qiita/ApiResult";
import qiitaDomain, { IResource, IApi } from "../../../domain/qiita";
import * as qiita from "../../../presentation/store/qiita";

@Component({
  components: {
    "api-property": ApiProperty,
    "api-result": ApiResult
  },
  props: {}
})
export default class Index extends Vue {
  // initial data
  resource: IResource | string = "";
  api: IApi = qiitaDomain.createEmptyApi();

  async created() {
    qiita.fetchSchema(this.$store);

    this.resource = qiita.getTargetResource(this.$store);
    this.api = qiita.getTargetApi(this.$store);
  }

  get resources(): IResource[] {
    return qiita.getResources(this.$store);
  }

  get apis(): IApi {
    return qiita.getTargetApi(this.$store);
  }

  get params(): object {
    return qiita.getApiParams(this.$store);
  }

  get result() {
    return qiita.getApiResponse(this.$store);
  }

  /**
   * リソース変更イベント
   *
   * @param IResource $event
   */
  changeResource($event: IResource) {
    qiita.changeTargetResource(this.$store, $event);
  }

  /**
   * API 変更イベント
   *
   * @param IApi $event
   */
  changeApi($event: IApi): void {
    qiita.changeTargetApi(this.$store, $event);
  }
}
</script>
