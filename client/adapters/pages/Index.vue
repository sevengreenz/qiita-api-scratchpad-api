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
          <div v-if="api.schema !== undefined">
            <v-layout row wrap v-for="(property, key) in api.schema.properties" v-bind:key="key">
              <v-flex d-flex xs12 md1>
                <v-subheader>{{ key }}</v-subheader>
              </v-flex>
              <v-flex d-flex xs6 md1>
                <v-subheader>{{ (api.schema.required || []).includes(key) ? 'required' : 'optional' }}</v-subheader>
              </v-flex>
              <v-flex d-flex xs6 md1>
                <v-subheader> {{ property.type }} </v-subheader>
              </v-flex>
              <v-flex d-flex xs12 md5>
                <v-subheader> {{ property.description }} </v-subheader>
              </v-flex>
              <v-flex d-flex xs12 md4>
                <v-text-field v-model="params[key]" :required="(api.schema.required || []).includes(key)" color="blue darken-2" :hint="'e.g. ' + property.example" persistent-hint>
                </v-text-field>
              </v-flex>
            </v-layout>
          </div>
          <v-btn primary dark v-on:click="execute">Exec</v-btn>
          <v-layout row wrap>
            <code>{{ result }}</code>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import qiitaDomain, { IResource, IApi, IApiParams } from "../../domain/qiita";
import * as qiita from "../../infrastructures/store/qiita";

@Component({
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

  /** API 実行 */
  async execute(): Promise<void> {
    console.log(this.params);
    const apiParams: IApiParams = {
      api: this.api,
      properties: this.params
    };
    await qiita.executeApi(this.$store, apiParams);
  }
}
</script>
