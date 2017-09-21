<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import QiitaRepository from '../repositories/qiita-repository';

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

    // computed property
    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }

    // method
    increment() {
        this.enthusiasm++;
    }
    async decrement() {
        const repository: QiitaRepository = new QiitaRepository(axios);
        const resourceList: any = await repository.findSchema();
        console.log(resourceList);
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }
};
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
