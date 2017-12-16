import { IOutputFunc } from './output-port-interface';

export default interface IInputPort {
  (outputPort: IOutputFunc, ...dependencies: any[]): {
    execute(params: any): Promise<void>;
  };
}
