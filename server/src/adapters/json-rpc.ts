import IInputPort from '../usecases/contracts/input-port-interface';
import IOutputPort from '../usecases/contracts/output-port-interface';
import { JsonRpcError } from './json-rpc-error';
import * as lambda from 'aws-lambda';

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
  call: (token: string, callBack: lambda.Callback) => Promise<void>;
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

const getInteractor = async (setting: IRpcSetting): Promise<IInputPort<any>> => {

  return await import(`../usecases/interactors/${setting.interactor}`)
    .then((interactor) => {
      console.log(interactor);
      console.log(interactor.default);
      return Promise.resolve(interactor.default);
    })
    .catch(() => {
      return Promise.reject(JsonRpcError.InvalidRequest);
    });
};

// type TOutput = (callback: any) => IOutputPort;

const getOutputPort = async (setting: IRpcSetting): Promise<IOutputPort> => {
  return await import(`./lambda/outputs/${setting.output}`)
    .then((outputPort) => {
      return Promise.resolve(outputPort.default);
    }).catch(() => {
      return Promise.reject(JsonRpcError.InvalidRequest);
    });
};

const make = (rpcRequest: IRpcRequest): IProcedure => {
  const procedure = rpcSettings[rpcRequest.method];
  console.log(procedure);
  if (procedure === undefined) throw new Error(JsonRpcError.methodNotFound);

  const rpc = (rpcSetting: IRpcSetting, id: string) => {
    return {
      call: async (token: string, callback: lambda.Callback) => {
        console.log('token');
        console.dir(token);
        const interactor = await getInteractor(rpcSetting);
        console.log(interactor);
        const outputPort = await getOutputPort(rpcSetting);
        console.log(outputPort);

        const usecase = interactor(outputPort(callback, id));
        console.log(usecase);
        usecase[rpcSetting.interactorMethod](Object.assign(rpcRequest.params, { token }));
      },
    };
  };

  return rpc(procedure, rpcRequest.id);
};

export default {
  // TODO: テストのためだけに export しているので修正
  getInteractor,
  getOutputPort,
  make,
};

