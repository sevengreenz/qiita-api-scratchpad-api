import { IInputPort } from '../../../usecases/contracts/input-port-interface';
import { IOutputPort } from '../../../usecases/contracts/output-port-interface';
import { JsonRpcError } from './json-rpc-error';
import { ControllerOutput } from 'src/types/contracts';

export interface IRpcRequest {
  jsonrpc: string;
  method: string;
  params: { [key: string]: any };
  id: string;
}

export interface IRpcSetting {
  interactor: string;
  interactorMethod: string;
  output: string;
}

export interface IProcedure {
  call: (token: string) => Promise<ControllerOutput>;
}

const rpcSettings: { [method: string]: IRpcSetting } = {
  executeApi: {
    interactor: 'qiita-interactor',
    interactorMethod: 'executeApi',
    output: 'api-output',
  },
  issueToken: {
    interactor: 'qiita-interactor',
    interactorMethod: 'issueToken',
    output: 'api-output',
  },
};

const getInteractor = async (
  setting: IRpcSetting
): Promise<IInputPort<any, any>> => {
  return await import(`../../../usecases/interactors/${setting.interactor}`)
    .then(interactor => {
      return Promise.resolve(interactor.default);
    })
    .catch(error => {
      return Promise.reject(JsonRpcError.InvalidRequest);
    });
};

// type TOutput = (callback: any) => IOutputPort;

const getOutputPort = async (setting: IRpcSetting): Promise<IOutputPort<ControllerOutput>> => {
  return await import(`./outputs/${setting.output}`)
    .then(outputPort => {
      return Promise.resolve(outputPort.default);
    })
    .catch(error => {
      return Promise.reject(JsonRpcError.InvalidRequest);
    });
};

const make = (rpcRequest: IRpcRequest): IProcedure => {
  const procedure = rpcSettings[rpcRequest.method];
  if (procedure === undefined) throw new Error(JsonRpcError.methodNotFound);

  const rpc = (rpcSetting: IRpcSetting) => {
    return {
      call: async (token: string) => {
        const interactor = await getInteractor(rpcSetting);
        const outputPort = await getOutputPort(rpcSetting);

        const usecase = interactor(outputPort());

        return (await usecase[rpcSetting.interactorMethod](
          Object.assign(rpcRequest.params, { token })
        )) as ControllerOutput;
      },
    };
  };

  return rpc(procedure);
};

export default {
  // TODO: テストのためだけに export しているので修正
  getInteractor,
  getOutputPort,
  make,
};
