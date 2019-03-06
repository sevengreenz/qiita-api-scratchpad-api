import { IOutputPort } from '../../../usecases/contracts/output-port-interface';
import Mapper, { JsonRpcError } from '../json-rpc-error';
import { ControllerOutput } from 'src/types/contracts';

const apiOutput: IOutputPort<ControllerOutput> = () => {
  return {
    outputSuccess: (result) => {
      console.log({
        result,
        process: 'outputSuccess',
      });

      return { result };
    },

    outputFailure: (error: JsonRpcError) => {
      console.log(error);

      return {
        error: {
          code: Mapper.errorCodeMapper[error],
          message: error
        }
      };
    },

  };
};

export default apiOutput;
