import httpClientFactory from '../../usecases/actions/http-client-factory';
import { IQiitaRepository } from '../repositories/qiita-repository-interface';
import { ITokenRepository } from '../repositories/token-repository-interface';

const tokenInteractor =
  (qiitaRepository: IQiitaRepository, tokenRepository: ITokenRepository) => {
    return {
      /**
       * アクセストークン 作成
       */
      create: async (code: string): Promise<string> => {
        const createHttpClient = () => httpClientFactory.createHttpClient;

        const token = await qiitaRepository(createHttpClient()).issueToken(code);

        tokenRepository.set(token);

        return token;
      },
    };
  };

export default tokenInteractor;



