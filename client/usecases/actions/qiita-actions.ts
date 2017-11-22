import { QiitaContext, commitApiResponse } from '../../infrastructures/store/qiita/qiita';
import { IApiParams } from '../../infrastructures/store/qiita/qiita-state';
import axios from 'axios';
import QiitaData from '../../data/qiita-data';
import util from '../../util';

// import ScratchpadApiGateway from '../api-gateways/scratchpad-api-gateway';
// import ScratchpadApi from '../../adapters/apis/scratchpad-api';

const executeApi = async (context: QiitaContext, params: IApiParams): Promise<void> => {
  // 値がアサインされていないプロパティを削除
  const convertedParams = util.removeUndefinedProperty(params.properties);

  const data: QiitaData = new QiitaData(axios);
  const result: any = await data.execute(params.api.method, params.api.href, convertedParams);

  commitApiResponse(context, result);
};

export default {
  executeApi,
};
