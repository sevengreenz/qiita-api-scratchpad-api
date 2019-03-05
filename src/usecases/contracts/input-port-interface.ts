import { IOutputFunc } from './output-port-interface';

export interface IInputPort<T, U> {
  (outputPort: IOutputFunc<T>): U;
}
