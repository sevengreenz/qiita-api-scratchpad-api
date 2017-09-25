import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IQiitaSchemaResponse, IResource } from './../../domain/qiita';
import { Seq } from 'immutable';

export default class QiitaRepository {
  constructor(private httpClient: AxiosInstance) {
    httpClient.defaults.baseURL = 'http://localhost:3000/qiita';
  }

  // public async findSchema(): Promise<Map<string, IResource>> {
  // public async findSchema(): Promise<Seq<string, IResource>> {
  public async findSchema(): Promise<IResource[]> {
    const response: AxiosResponse = await this.httpClient.get('schema');
    // return new Map(Object.entries(response.data.properties));
    // return Seq(response.data.properties);
    return Object.values(response.data.properties);
  }
}
