type TExecuteApiParams = {
  method: string,
  url: string,
  params: {},
  token: string,
};

type TIssueTokenParams = {
  code: string,
};

export default interface IQiitaInteractor {
  executeApi: (params: TExecuteApiParams) => Promise<void>;
  issueToken: (params: TIssueTokenParams) => Promise<void>;
}
