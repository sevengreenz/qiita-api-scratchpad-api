import { AxiosError } from 'axios';
import UnAuthorizedError from './unauthorized-error';
import ServerError from './server-error';

const throwError = (error: AxiosError) => {
  if (error.response !== undefined) {
    const status = error.response.status;

    if (status === 401) {
      throw new UnAuthorizedError(status.toString());
    } else {
      throw new ServerError(status.toString());
    }
  }

  throw new ServerError('Unexpeced Error');
};

export default {
  throwError,
};
