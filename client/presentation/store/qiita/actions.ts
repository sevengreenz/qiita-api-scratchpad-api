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
import schemaInteractor from '../../../domain/interactors/schema-interactor';
import qiitaInteractor from '../../../domain/interactors/qiita-interactor';

const fetchSchema = async (context: QiitaContext): Promise<void> => {
  await schemaInteractor
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
  await qiitaInteractor
    .executeApi({
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
