import httpClientFactory from '../actions/http-client-factory';
import { IScratchpadApiGateway } from '../contracts/scratchpad-api-gateway-interface';
import { ITokenStorageGateway } from '../contracts/token-storage-gateway-interface';

const tokenInteractor =
  (scratchpadApiGateway: IScratchpadApiGateway, tokenSessionGateway: ITokenStorageGateway) => {
    return {
      /**
       * アクセストークン 作成
       */
      create: async (code: string): Promise<string> => {
        const createHttpClient = () => httpClientFactory.createHttpClient;

        const token = await scratchpadApiGateway(createHttpClient()).issueToken(code);

        tokenSessionGateway.set(token);

        return token;
      },
    };
  };

export default tokenInteractor;



