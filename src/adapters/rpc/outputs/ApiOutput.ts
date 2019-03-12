import JsonRpcErrorFn, { JsonRpcError } from '../JsonRpcError';
import { ControllerOutput, OutputPort } from 'src/types/contracts';

const apiOutput: OutputPort<ControllerOutput> = {
  outputSuccess: (result) => {
    return { result };
  },

  outputFailure: (error: JsonRpcError) => {
    return {
      error: JsonRpcErrorFn.createError(error)
    };
  },

};

export default apiOutput;
