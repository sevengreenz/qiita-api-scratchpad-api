<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <v-card class="grey lighten-4 evaluation-0">
            <v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-select v-bind:items="resources" v-model="resource" v-on:change="changeResource($event)" item-text="title" item-value="title" return-object :hint="`${resource.description}`" persistant-hint label="Resource" bottom></v-select>
                    </v-layout>
                    <v-layout row wrap>
                        <v-select v-bind:items="resource.links" v-model="api" item-text="title" return-object :hint="`${api.description}`" persistant-hint label="API" bottom></v-select>
                    </v-layout>
                    <v-layout row wrap>
                        resource {{JSON.stringify(resource, undefined, "\t")}}
                        <br><br><br> api {{ JSON.stringify(api, undefined, "\t")}}
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
import { IResource, IApi } from '../../domain/qiita';

@Component({
    props: {
        name: String,
        initialEnthusiasm: Number
    }
})
export default class Hello extends Vue {
    name: string;
    initialEnthusiasm: number;

    // initial data
    enthusiasm: number = this.initialEnthusiasm;
    schema: IResource[] = [];
    resources: IResource[] = [];
    resource: IResource | null = null;
    api: IApi | null = null;

    async created() {
        const resources = await this.fetchQiitaSchema();
        console.log(resources);
        this.resources = resources;
        this.resource = resources[0];
        this.api = this.resource.links[0];

        console.log(this.resources);
    }

    // computed property
    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }

    // method
    increment() {
        this.enthusiasm++;
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }
    async fetchQiitaSchema(): Promise<IResource[]> {
        const repository: QiitaRepository = new QiitaRepository(axios);
        const resources: any = await repository.findSchema();
        console.log(resources);
        return resources;
    }
    changeResource($event: IResource) {
        console.log('changeResource called');
        // 選択している API が選択されたリソースに含まれているか
        const isSameResource = $event.links.some((x) => {
            if (x === null) return false;
            if (this.api === null) return false;
            return x.title === this.api.title;
        }, this)
        if (!isSameResource) {
            this.api = $event.links[0];
        }
    }
};
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
