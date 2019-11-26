type TExecuteApiParams = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  params: {},
  token: string,
};

type TIssueTokenParams = {
  code: string,
};

export default interface IQiitaInteractor<T = any> {
  executeApi: (params: TExecuteApiParams) => Promise<T>;
  issueToken: (params: TIssueTokenParams) => Promise<T>;
}
