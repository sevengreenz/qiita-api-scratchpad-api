import Vue from 'vue';
import { Qiita } from '../../domain/qiita';
export default class Index extends Vue {
    schema: Qiita.IResource[];
    resources: Qiita.IResource[];
    resource: Qiita.IResource;
    api: Qiita.IApi;
    properties: object;
    result: string;
    created(): Promise<void>;
    /**
     * Qiita Schema 取得
     */
    fetchQiitaSchema(): Promise<Qiita.IResource[]>;
    /**
     * パラメータ初期化
     */
    resetProperty(schema: Qiita.ISchema): void;
    /**
     * リソース変更イベント
     *
     * @param IResource $event
     */
    changeResource($event: Qiita.IResource): void;
    /**
     * API 変更イベント
     *
     * @param IApi $event
     */
    changeApi($event: Qiita.IApi): void;
    /** API 実行 */
    execute(): Promise<any>;
}
