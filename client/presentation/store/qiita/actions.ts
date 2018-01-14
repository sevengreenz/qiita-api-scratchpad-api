import {
  QiitaContext,
  commitApiResponse,
  commitResources,
  commitTargetResource,
  commitTargetApi,
} from './qiita';
import qiitaDomain, { IApiParams, IApi, IResource, IApiResponse } from '../../../domain/qiita';
import httpClientFactory from '../../../domain/http-client-factory';
import schemaRepository from '../../../data/repositories/schema-repository';
import qiitaRepository from '../../../data/repositories/qiita-repository';
import qiitaDataStoreFactory from '../../../data/repositories/data-stores/qiita/qiita-data-store-factory';

const fetchSchema = async (context: QiitaContext): Promise<void> => {
  const resources = await schemaRepository(httpClientFactory.createHttpClient).find();

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
  await qiitaRepository(qiitaDataStoreFactory)
    .execute(params.api.method, params.api.href, qiitaDomain.removeUndefinedProperty(params.properties))
    .then((response: IApiResponse) => commitApiResponse(context, response));
};

export default {
  fetchSchema,
  changeTargetResource,
  changeTargetApi,
  executeApi,
};
