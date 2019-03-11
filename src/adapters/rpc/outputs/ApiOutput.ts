// import { IOutputPort } from '../../../usecases/contracts/output-port-interface';
import JsonRpcErrorFn, { JsonRpcError } from '../JsonRpcError';
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
      error: JsonRpcErrorFn.createError(error)
    };
  },

};

export default apiOutput;
