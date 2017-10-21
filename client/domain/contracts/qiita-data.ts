import { Qiita } from '../qiita';

export default interface IQiitaData {
  findSchema(): Promise<Qiita.IResource[]>;

  execute(method: string, url: string, params: object): Promise<Qiita.IApiResponse>;
}
