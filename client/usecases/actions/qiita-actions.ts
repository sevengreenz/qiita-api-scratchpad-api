import { QiitaContext, commitApiResponse } from '../../infrastructures/store/qiita/qiita';
import { IApiParams } from '../../domain/qiita';
import axios from 'axios';
import util from '../../util';

import ScratchpadApiGateway from '../api-gateways/scratchpad-api-gateway';
import ScratchpadApi from '../../adapters/apis/scratchpad-api';

const executeApi = async (context: QiitaContext, params: IApiParams): Promise<void> => {
  // 値がアサインされていないプロパティを削除
  const convertedParams = util.removeUndefinedProperty(params.properties);

  const scratchpadApi = new ScratchpadApi(axios);
  const scratchpadApiGateway = new ScratchpadApiGateway(scratchpadApi);

  const result: any = await scratchpadApiGateway.executeQiitaApi(
    params.api.method,
    params.api.href,
    convertedParams,
  );

  commitApiResponse(context, result);
};

export default {
  executeApi,
};
