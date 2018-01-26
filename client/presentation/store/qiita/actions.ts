import {
  QiitaContext,
  commitApiResponse,
  commitResources,
  commitTargetResource,
  commitTargetApi,
  getTargetResource,
  getTargetApi,
} from './qiita';
import { IApiParams, IApi, IResource, IApiResponse } from '../../../domain/qiita';
import schemaRepository from '../../../data/repositories/schema-repository';
import qiitaRepository from '../../../data/repositories/qiita-repository';
import qiitaDataStoreFactory from '../../../data/repositories/data-stores/qiita/qiita-data-store-factory';
import schemaDataStoreFactory from '../../../data/repositories/data-stores/schema/schema-data-store-factory';
import executedDataStoreFactory from '../../../data/repositories/data-stores/executed/executed-data-store-factory';
import schemaInteractor from '../../../domain/interactors/schema-interactor';
import qiitaInteractor from '../../../domain/interactors/qiita-interactor';
import executedRepository from '../../../data/repositories/executed-repository';

const fetchSchema = async (context: QiitaContext): Promise<void> => {
  await schemaInteractor(schemaRepository(schemaDataStoreFactory))
    .fetch()
    .then((resources: IResource[]) => {
      commitResources(context, resources);
      commitTargetResource(context, resources[0]);
    });
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
  await qiitaInteractor(
    qiitaRepository(qiitaDataStoreFactory),
    executedRepository(executedDataStoreFactory),
  ).executeApi({
    params,
    resource: getTargetResource(context),
    api: getTargetApi(context),
  }).then((response: IApiResponse) => {
    commitApiResponse(context, response);
  });
};

export default {
  fetchSchema,
  changeTargetResource,
  changeTargetApi,
  executeApi,
};
