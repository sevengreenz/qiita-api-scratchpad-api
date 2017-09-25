<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <v-card class="grey lighten-4 evaluation-0">
            <v-card-text>
                <v-container fluid>
                    <v-select v-bind:items="resources" v-model="resource" item-text="text" item-value="text" return-object :hint="`${resource.description}`" persistant-hint label="resource" bottom></v-select>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import { Seq } from 'immutable';
import QiitaRepository from '../repositories/qiita-repository';
import { IResource } from '../../domain/qiita';

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
    schema: Seq<string, IResource> = Seq();
    resources: any[] = [];
    resource: any = null;

    async created() {
        const resources = await this.fetchQiitaSchema();
        console.log(resources);
        this.schema = resources;
        // this.resources = resources.keySeq().map((x) => {
        //     return { 'text': x };
        // }).toArray();
        this.resources = resources.map((v, k) => {
            let description: string = '';
            if (v !== null && v !== undefined) {
                description = v.description;
            }
            return {
                'text': k,
                'description': description
            }
        }).toArray();
        this.resource = this.resources[0];
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
    async fetchQiitaSchema(): Promise<Seq<string, IResource>> {
        const repository: QiitaRepository = new QiitaRepository(axios);
        const resources: any = await repository.findSchema();
        console.log(resources);
        return resources;
    }
};
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
