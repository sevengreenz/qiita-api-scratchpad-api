import { JsonRpcError } from './json-rpc-error';
import { DecodedRequestBody } from 'jsonrpc';
import { ControllerOutput } from 'src/types/contracts';
import JsonRpcSetting from './JsonRpcSetting';

export interface IProcedure {
  call: (token: string) => Promise<ControllerOutput>;
}

const make = (rpcRequest: DecodedRequestBody): IProcedure => {
  const procedure = JsonRpcSetting[rpcRequest.method];

  if (procedure === undefined) throw new Error(JsonRpcError.methodNotFound);

  const rpc = (procedure: Function) => {
    return {
      call: async (token: string) => {
        return (await procedure(
          Object.assign(rpcRequest.params, { token })
        )) as ControllerOutput;
      },
    };
  };

  return rpc(procedure);
};

export default {
  make,
};
