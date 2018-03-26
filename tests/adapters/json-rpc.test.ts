import 'jest';
import jsonRpc, { IRpcSetting, IRpcRequest } from '../../src/adapters/lambda/rpc/json-rpc';
import IOutputPort from '../../src/usecases/contracts/output-port-interface';
import util from '../../lib/util';

describe('json-rpc', () => {
  const rpcSetting: IRpcSetting = {
    interactor: 'qiita-interactor',
    interactorMethod: 'executeApi',
    output: 'api-output',
  };

  const callback = (error?: Error | undefined, result?: any): void => console.log('ok');

  describe('getInteractor', () => {
    it('should resolve as interactor', async () => {
      const output: IOutputPort = (callback) => {
        return {
          outputSuccess: () => { },
          outputFailure: () => { },
          outputRedirection: () => { },
        };
      };

      await jsonRpc
        .getInteractor(rpcSetting)
        .then((interactor) => {
          const usecase = interactor(output(callback, ''));
          expect(usecase).toHaveProperty('executeApi');
          expect(usecase).toHaveProperty('issueToken');
          expect(usecase).toHaveProperty('authorize');
        });
    });

    it('should reject Invalid Request', async () => {
      await jsonRpc
        .getInteractor(Object.assign(util.deepCopy<IRpcSetting>(rpcSetting), { interactor: 'not-found' }))
        .catch((error) => {
          expect(error).toBe('Invalid Request');
        });
    });
  });

  describe('getOutput', () => {
    it('should resolve as output', async () => {
      await jsonRpc.getOutputPort(rpcSetting)
        .then((outputFunc) => {
          const output = outputFunc(callback, '');
          expect(output).toHaveProperty('outputSuccess');
          expect(output).toHaveProperty('outputFailure');
        });
    });

    it('should reject Invalid Request', async () => {
      await jsonRpc
        .getOutputPort(Object.assign(util.deepCopy<IRpcSetting>(rpcSetting), { output: 'not foud' }))
        .catch((error) => {
          expect(error).toBe('Invalid Request');
        });
    });
  });

  describe('make', () => {
    it('should be return object has call property', () => {
      const body = {
        jsonrpc: '',
        method: 'executeApi',
        params: {},
        id: '',
      };

      expect(
        jsonRpc.make(body),
      ).toHaveProperty('call');
    });
  });
});
