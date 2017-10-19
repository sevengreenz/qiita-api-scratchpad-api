export default interface IOutputPort {
  outputSuccess(result: any): void;
  outputRedirection(locationUrl: string): void;
}
