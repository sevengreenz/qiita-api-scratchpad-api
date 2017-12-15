import IOutputPort from './output-port';

export default interface IInputPort {
  (outputPort: IOutputPort, ...dependencies: any[]): {
    execute(params: any): Promise<void>;
  };
}
