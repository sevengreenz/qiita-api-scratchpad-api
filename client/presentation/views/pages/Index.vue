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
          <api-property :api="targetApi" :params="params"></api-property>
          <api-result :result="result"></api-result>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import ApiProperty from "../components/qiita/ApiProperty.vue";
import ApiResult from "../components/qiita/ApiResult.vue";
import { IResource, IApi } from "../../../domain/qiita";
import * as qiitaStore from "../../store/qiita";

@Component({
  components: {
    "api-property": ApiProperty,
    "api-result": ApiResult
  },
  props: {}
})
export default class Index extends Vue {
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

  get params(): object {
    return qiitaStore.getApiParams(this.$store);
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
}
</script>
