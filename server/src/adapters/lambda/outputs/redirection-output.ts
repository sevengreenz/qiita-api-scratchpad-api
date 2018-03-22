import IOutputPort from '../../../usecases/contracts/output-port-interface';
import { JsonRpcError } from '../../json-rpc-error';
import responseFunc from './response';

const redirectionOutput: IOutputPort = (callback, id) => {
  return {
    outputSuccess: (result) => {
      const locationHeader = {
        Location: result,
      };

      const response = responseFunc.makeSuccessResponse({
        id: id || '',
        statusCode: 302,
        headers: locationHeader,
        body: '',
      });

      callback(undefined, response);

    },

    outputFailure: (result: JsonRpcError) => {
      console.log(result);

      const response = responseFunc.makeFailureResponse({
        id: id || '',
        statusCode: 200,
        headers: {},
        body: result,
      });

      callback(undefined, response);
    },

  };
};

export default redirectionOutput;
