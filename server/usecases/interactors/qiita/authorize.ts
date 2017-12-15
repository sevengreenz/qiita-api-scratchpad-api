import IInputPort from '../../contracts/input-port';
import qiitaDomain from '../../../domain/qiita-domain';

const authorizeInteractor: IInputPort = (outputPort) => {
  return {
    execute: async (params): Promise<void> => {
      const url = qiitaDomain.makeAuthorizationUrl();

      outputPort.outputRedirection(url);
    },
  };
};

export default authorizeInteractor;
