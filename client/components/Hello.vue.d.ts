import Vue from 'vue';
import { IResource, IApi, ISchema } from '../../domain/qiita';
export default class Hello extends Vue {
    schema: IResource[];
    resources: IResource[];
    resource: IResource;
    api: IApi;
    properties: object;
    created(): Promise<void>;
    /**
     * Qiita Schema 取得
     */
    fetchQiitaSchema(): Promise<IResource[]>;
    /**
     * パラメータ初期化
     */
    resetProperty(schema: ISchema): void;
    /**
     * リソース変更イベント
     *
     * @param IResource $event
     */
    changeResource($event: IResource): void;
    /**
     * API 変更イベント
     *
     * @param IApi $event
     */
    changeApi($event: IApi): void;
}
