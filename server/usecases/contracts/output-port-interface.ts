export default interface IOutputPort {
  outputSuccess(result: any): void;
  outputFailure(result: any): void;
  outputRedirection(locationUrl: string): void;
}
