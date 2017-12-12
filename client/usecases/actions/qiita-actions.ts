import {
  QiitaContext,
  commitApiResponse,
  commitResources,
  commitTargetResource,
  commitTargetApi,
} from '../../infrastructures/store/qiita/qiita';
import { IApiParams, IApi, IResource } from '../../domain/qiita';
import axios from 'axios';
import util from '../../util';

import ScratchpadApiGateway from '../../adapters/api-gateways/scratchpad-api-gateway';
import ExternalApiGateway from '../../adapters/api-gateways/external-api-gateway';

const fetchSchema = async (context: QiitaContext): Promise<void> => {
  const externalApiGateway = new ExternalApiGateway(axios);

  const resources = await externalApiGateway.findQiitaApiSchema();

  commitResources(context, resources);
  commitTargetResource(context, resources[0]);
  commitTargetApi(context, resources[0].links[0]);
};

const changeTargetResource = (context: QiitaContext, resource: IResource): void => {
  commitTargetResource(context, resource);
  commitTargetApi(context, resource.links[0]);
};

const changeTargetApi = (context: QiitaContext, api: IApi): void => {
  commitTargetApi(context, api);
};

/**
 * API を実行する
 *
 * @param {QiitaContext} context
 */
const executeApi = async (context: QiitaContext, params: IApiParams): Promise<void> => {
  // 値がアサインされていないプロパティを削除
  const convertedParams = util.removeUndefinedProperty(params.properties);

  const scratchpadApiGateway = new ScratchpadApiGateway(axios);

  const result: any = await scratchpadApiGateway.executeQiitaApi(
    params.api.method,
    params.api.href,
    convertedParams,
  );

  commitApiResponse(context, result);
};

/**
 * アクセストークン取得
 *
 * @param {QiitaContext} context
 * @param string code
 */
// const fetchAccessToken = (context: QiitaContext, code: string): Promise<void> => {
//
// };


export default {
  fetchSchema,
  changeTargetResource,
  changeTargetApi,
  executeApi,
};
