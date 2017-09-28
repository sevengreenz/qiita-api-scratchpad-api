import Vue from 'vue';
import { IResource, IApi, ISchema } from '../../domain/qiita';
export default class Hello extends Vue {
    name: string;
    initialEnthusiasm: number;
    enthusiasm: number;
    schema: IResource[];
    resources: IResource[];
    resource: IResource;
    api: IApi;
    properties: object;
    created(): Promise<void>;
    readonly exclamationMarks: string;
    increment(): void;
    decrement(): void;
    fetchQiitaSchema(): Promise<IResource[]>;
    /**
     * パラメータ初期化
     */
    resetProperty(schema: ISchema): void;
    changeResource($event: IResource): void;
    changeApi($event: IApi): void;
}
