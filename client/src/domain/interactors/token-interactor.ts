import tokenRepository from '../../data/repositories/token-repository';

const tokenInteractor = {
  /**
   * アクセストークン 作成
   */
  create: async (code: string): Promise<string> => {
    const token = await tokenRepository.issue(code);

    tokenRepository.update(token);

    return token;
  },
};

export default tokenInteractor;



