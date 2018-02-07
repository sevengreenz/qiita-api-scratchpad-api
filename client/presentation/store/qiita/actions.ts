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
import executedInteractor from '../../../domain/interactors/executed-interactor';

const fetchSchema = async (context: QiitaContext): Promise<void> => {
  await schemaInteractor
    .fetch()
    .then((resources: IResource[]) => {
      commitResources(context, resources);

      // session に保存されていた場合、targetResource にセットする
      const executed = executedInteractor.getLastExecuteApi();
      if (executed !== null) {
        commitTargetResource(context, executed.resource);
        commitTargetApi(context, executed.api);
      } else {
        commitTargetResource(context, resources[0]);
        commitTargetApi(context, resources[0].links[0]);
      }
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
      resource: getTargetResource(context),
      api: getTargetApi(context),
      urlParams: params.urlParams,
      dataParams: params.dataParams,
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
