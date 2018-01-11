import { ITokenRepository } from '../repositories/token-repository-interface';

const tokenInteractor =
  (tokenRepository: ITokenRepository) => {

    return {
      /**
       * アクセストークン 作成
       */
      create: async (code: string): Promise<string> => {
        const token = await tokenRepository.issue(code);

        tokenRepository.update(token);

        return token;
      },
    };
  };

export default tokenInteractor;



