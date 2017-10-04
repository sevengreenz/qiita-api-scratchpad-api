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
            <v-layout row v-for="(property, key) in api.schema.properties" v-bind:key="key">
              <v-flex xs2>
                <v-subheader>{{ key }}</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-subheader> {{ property.description }} </v-subheader>
              </v-flex>
              <v-flex xs2>
                <v-subheader> {{ property.type }} </v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-text-field v-model="properties[key]" :hint="'e.g. ' + property.example" persistent-hint>
                </v-text-field>
              </v-flex>
            </v-layout>
          </div>
          <v-btn light v-on:click="execute">Exec</v-btn>
          <v-layout row wrap>
              <code>{{ result }}</code>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import QiitaRepository from '../repositories/qiita-repository';
import { Qiita } from '../../domain/qiita';

@Component({
  props: {
  }
})
export default class Index extends Vue {
  // initial data
  schema: Qiita.IResource[] = [];
  resources: Qiita.IResource[] = [];
  resource: Qiita.IResource = {
    title: '',
    description: '',
    links: [],
    properties: {},
    required: []
  };
  api: Qiita.IApi = {
    title: '',
    description: '',
    href: '',
    method: '',
    schema: {
        properties: {}
    },
    required: []
  };
  properties: object;
  result: string = '';

  async created() {
    const resources = await this.fetchQiitaSchema();
    this.resources = resources;
    this.resource = resources[0];
    this.api = this.resource.links[0];
    if (this.api.schema !== undefined) this.resetProperty(this.api.schema);
  }

  // method
  /**
   * Qiita Schema 取得
   */
  async fetchQiitaSchema(): Promise<Qiita.IResource[]> {
    const repository: QiitaRepository = new QiitaRepository(axios);
    const resources: any = await repository.findSchema();
    return resources;
  }

  /**
   * パラメータ初期化
   */
  resetProperty(schema: Qiita.ISchema): void {
    // パラメータ初期化　
    this.properties = Object.keys(schema.properties).reduce((carry: object, x: string): object => {
      Object.defineProperty(carry, x, { value: null, writable: true });
      return carry;
    }, new Object())

  }

  /**
   * リソース変更イベント
   * 
   * @param IResource $event
   */
  changeResource($event: Qiita.IResource) {
    // 選択している API が選択されたリソースに含まれているか
    const isSameResource = $event.links.some((x) => {
      if (x === null) return false;
      if (this.api === null) return false;
      return x.title === this.api.title;
    }, this)

    if (!isSameResource) {
      this.api = $event.links[0];
      if (this.api.schema !== undefined) this.resetProperty(this.api.schema);
    }
  }

  /**
   * API 変更イベント
   * 
   * @param IApi $event
   */
  changeApi($event: Qiita.IApi): void {
    if ($event.schema !== undefined) this.resetProperty($event.schema);
  }

  /** API 実行 */
  async execute(): Promise<any> {
    const result = await Qiita.execute(this.api, this.properties);
    console.log(result);
    this.result = result.data;
  }
};
</script>
