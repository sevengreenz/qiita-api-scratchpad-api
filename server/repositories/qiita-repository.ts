import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IQiitaSchemaResponse } from "../domain/qiita";

export default class QiitaRepository {
    constructor(private httpClient: AxiosInstance) {
        httpClient.defaults.baseURL = "http://qiita.com/api/v2";
    }

    public async findSchema(): Promise<IQiitaSchemaResponse> {
        const response: AxiosResponse = await this.httpClient.get("schema");
        const result: IQiitaSchemaResponse = {
            body: response.data,
            headers: response.headers,
            statusCode: response.status,
        };
        return result;
    }
}
