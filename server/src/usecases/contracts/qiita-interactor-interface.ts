export default interface IQiitaInteractor {
  authorize: () => Promise<void>;
  executeApi: (method: string, url: string, params: {}, token: string) => Promise<void>;
  issueToken: (code: string) => Promise<void>;
}
