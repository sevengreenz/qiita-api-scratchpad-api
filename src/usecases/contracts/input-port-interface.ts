import { IOutputFunc } from './output-port-interface';

export default interface IInputPort<T> {
  (outputPort: IOutputFunc): T;
}
