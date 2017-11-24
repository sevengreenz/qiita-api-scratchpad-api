import {
  QiitaContext,
  commitApiResponse,
  commitResources,
  commitTargetResource,
  commitTargetApi,
  commitApiParams,
} from '../../infrastructures/store/qiita/qiita';
import qiitaDomain, { IApiParams, IApi } from '../../domain/qiita';
import axios from 'axios';
import util from '../../util';

import ScratchpadApiGateway from '../api-gateways/scratchpad-api-gateway';
import ScratchpadApi from '../../adapters/apis/scratchpad-api';
import ExternalApiGateway from '../api-gateways/external-api-gateway';
import ExternalApi from '../../adapters/apis/external-api';

const fetchSchema = async (context: QiitaContext): Promise<void> => {
  const externalApi = new ExternalApi(axios);
  const externalApiGateway = new ExternalApiGateway(externalApi);
  const resources = await externalApiGateway.fetchQiitaApiSchema();

  commitResources(context, resources);
  commitTargetResource(context, resources[0]);
  commitTargetApi(context, resources[0].links[0]);
};

const changeTargetApi = (context: QiitaContext, api: IApi): void => {
  commitTargetApi(context, api);

  // 変更後の API の初期パラメータ作成
  const params = api.schema === undefined
    ? {}
    : qiitaDomain.makeApiParams(api.schema);

  commitApiParams(context, params);
};

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
  fetchSchema,
  changeTargetApi,
  executeApi,
};
