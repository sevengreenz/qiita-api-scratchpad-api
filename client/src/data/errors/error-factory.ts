import { AxiosResponse } from 'axios';
import UnAuthorizedError from './unauthorized-error';
import ServerError from './server-error';

const throwError = (error: AxiosResponse) => {
  if (error.data.errors.code === -32604) {
    throw new UnAuthorizedError(error.data.errors.message);
  } else {
    throw new ServerError(error.data.errors.message);
  }
};

export default {
  throwError,
};
