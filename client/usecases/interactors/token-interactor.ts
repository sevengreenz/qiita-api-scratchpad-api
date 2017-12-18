import httpClientFactory from '../actions/http-client-factory';
import { IScratchpadApiGateway } from '../contracts/scratchpad-api-gateway-interface';

const tokenInteractor = (scratchpadApiGateway: IScratchpadApiGateway) => {
  return {
    /**
     * アクセストークン 作成
     */
    create: async (code: string): Promise<string> => {
      const createHttpClient = () => httpClientFactory.createHttpClient;

      const result = await scratchpadApiGateway(createHttpClient()).issueToken(code);

      // TODO: local storage に登録
      return result;
    },
  };
};

export default tokenInteractor;



