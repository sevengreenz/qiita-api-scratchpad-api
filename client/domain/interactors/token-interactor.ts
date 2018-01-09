import httpClientFactory from '../http-client-factory';
import { ITokenRepository } from '../repositories/token-repository-interface';

const tokenInteractor =
  (tokenRepository: ITokenRepository) => {

    return {
      /**
       * アクセストークン 作成
       */
      create: async (code: string): Promise<string> => {
        const repository = tokenRepository(httpClientFactory.createHttpClient);

        const token = await repository.issue(code);

        repository.set(token);

        return token;
      },
    };
  };

export default tokenInteractor;



