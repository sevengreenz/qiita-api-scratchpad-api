import Vue from 'vue';
import { IResource } from '../../domain/qiita';
export default class Hello extends Vue {
    name: string;
    initialEnthusiasm: number;
    enthusiasm: number;
    resources: Iterator<string>;
    selectedResource: string;
    mounted(): Promise<void>;
    readonly exclamationMarks: string;
    increment(): void;
    decrement(): void;
    fetchQiitaSchema(): Promise<Map<string, IResource>>;
}
