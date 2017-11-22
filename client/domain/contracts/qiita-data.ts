import { IResource } from '../qiita';
// import { IResource, IApiResponse } from '../qiita';

export default interface IQiitaData {
  findSchema(): Promise<IResource[]>;

  // execute(method: string, url: string, params: object): Promise<IApiResponse>;
}
