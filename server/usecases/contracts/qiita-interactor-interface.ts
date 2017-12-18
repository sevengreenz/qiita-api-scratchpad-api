export default interface IQiitaInteractor {
  authorize: () => Promise<void>;
  executeApi: (method: string, url: string, params: {}) => Promise<void>;
  issueToken: (code: string) => Promise<void>;
}
