import {
  QiitaContext,
  commitApiResponse,
  commitResources,
  commitTargetResource,
  commitTargetApi,
} from '../../presentation/store/qiita/qiita';
import qiitaDomain, { IApiParams, IApi, IResource } from '../../domain/qiita';
import httpClientFactory from './http-client-factory';
import scratchpadApiGateway from '../../adapters/api-gateways/scratchpad-api-gateway';
import externalApiGateway from '../../adapters/api-gateways/external-api-gateway';

const fetchSchema = async (context: QiitaContext): Promise<void> => {
  const createHttpClient = () => httpClientFactory.createHttpClient;

  const resources = await externalApiGateway(createHttpClient()).findQiitaApiSchema();

  commitResources(context, resources);
  commitTargetResource(context, resources[0]);
};

const changeTargetResource = (context: QiitaContext, resource: IResource): void => {
  commitTargetResource(context, resource);
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
  const convertedParams = qiitaDomain.removeUndefinedProperty(params.properties);

  const createHttpClient = () => httpClientFactory.createHttpClient;

  const result = await scratchpadApiGateway(createHttpClient())
    .executeQiitaApi(params.api.method, params.api.href, convertedParams);

  commitApiResponse(context, result);
};

export default {
  fetchSchema,
  changeTargetResource,
  changeTargetApi,
  executeApi,
};
