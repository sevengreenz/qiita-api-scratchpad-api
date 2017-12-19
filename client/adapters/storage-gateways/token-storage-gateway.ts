import { ITokenStorageGateway } from '../../usecases/contracts/token-storage-gateway-interface';
import { ISession } from '../contracts/session-interface';

const tokenStorageGateway = (session: ISession): ITokenStorageGateway => {
  const key = 'access_token';

  return {
    get: () => {
      return session.get(key);
    },

    set: (token) => {
      session.set(key, token);
    },
  };
};

export default tokenStorageGateway;
