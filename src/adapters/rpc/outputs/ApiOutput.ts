// import { IOutputPort } from '../../../usecases/contracts/output-port-interface';
import Mapper, { JsonRpcError } from '../JsonRpcError';
import { ControllerOutput, OutputPort } from 'src/types/contracts';

const apiOutput: OutputPort<ControllerOutput> = {
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

export default apiOutput;
