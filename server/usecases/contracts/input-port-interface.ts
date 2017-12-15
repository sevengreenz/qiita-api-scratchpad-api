import IOutputPort from './output-port-interface';

export default interface IInputPort {
  (outputPort: IOutputPort, ...dependencies: any[]): {
    execute(params: any): Promise<void>;
  };
}
