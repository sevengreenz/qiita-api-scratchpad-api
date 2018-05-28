import IOutputPort from '../../../../usecases/contracts/output-port-interface';
import jsonRpcErrorFunc, { JsonRpcError } from '../json-rpc-error';
import response from '../../response';

const apiOutput: IOutputPort = (callback, id) => {
  return {
    outputSuccess: (result) => {
      console.log({
        result,
        process: 'outputSuccess',
      });

      callback(undefined, response.create(
        200,
        {},
        { id, result, jsonrpc: '2.0' },
      ));
    },

    outputFailure: (error: JsonRpcError) => {
      console.log(error);

      callback(undefined, response.create(
        200,
        {},
        {
          id,
          jsonrpc: '2.0',
          errors: {
            code: jsonRpcErrorFunc.errorCodeMapper[error],
            message: error,
          },
        }),
      );
    },

  };
};

export default apiOutput;
