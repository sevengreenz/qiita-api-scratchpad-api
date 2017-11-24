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

const changeTargetResource = (context: QiitaContext, resource: IResource): void => {
  commitTargetResource(context, resource);
  commitTargetApi(context, resource.links[0]);
};

const changeTargetApi = (context: QiitaContext, api: IApi): void => {
  commitTargetApi(context, api);
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
  changeTargetResource,
  changeTargetApi,
  executeApi,
};
