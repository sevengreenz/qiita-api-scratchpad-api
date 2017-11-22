import { IScratchpadApi } from '../contracts/scratchpad-api-interface';
import { IApiResponse } from '../../domain/qiita';

export default class ScratchpadApiGateway {
  constructor(private api: IScratchpadApi) {
  }

  public executeQiitaApi(method: string, url: string, params: object): Promise<IApiResponse> {
    const apiParams = {
      method,
      url,
      params,
    };

    return this.api.executeQiitaApi(apiParams);
  }
}
