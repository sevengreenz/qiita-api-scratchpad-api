import Vue from 'vue';
export default class Hello extends Vue {
    name: string;
    initialEnthusiasm: number;
    enthusiasm: number;
    readonly exclamationMarks: string;
    increment(): void;
    decrement(): Promise<void>;
}
