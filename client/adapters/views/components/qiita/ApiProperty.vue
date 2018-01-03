<template>
    <div>
        <div v-if="isShow">
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
        <unauthorized-error :isShow="hasError" :onDisagree="hideError"></unauthorized-error>
    </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { IApi, IApiParams } from "../../../../domain/qiita";
import * as qiita from "../../../../presentation/store/qiita";
import UnauthorizedError from '../../../api-gateways/errors/unauthorized-error';
import UnauthorizedErrorComponent from "../common/UnauthorizedError";

@Component({
    components: {
        "unauthorized-error": UnauthorizedErrorComponent,
    },
    props: {
        api: Object,
        params: Object
    }
})
export default class ApiProperty extends Vue {
    api: IApi;
    params: Object;
    hasError: boolean = false;

    get isShow(): boolean {
        return this.api.hasOwnProperty('schema');
    }

    async execute(): Promise<void> {
        console.log(this.params);
        const apiParams: IApiParams = {
            api: this.api,
            properties: this.params
        };

        await qiita.executeApi(this.$store, apiParams)
            .catch((e: Error) => {
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
