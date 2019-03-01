import * as queryString from 'query-string';

/** Qiita API 実行結果インターフェース */
export interface IQiitaApiResponse {
  status: number;
  data: any;
  headers: any;
}

export interface IIssueTokenResponse {
  token: string;
}

const makeAuthorizationUrl = (): string => {
  const params: { [key: string]: string } = {
    client_id: process.env.CLIENT_ID || '',
    scope: 'read_qiita write_qiita',
    state: 'scratchpad',
  };

  return `http://qiita.com/api/v2/oauth/authorize?'${queryString.stringify(params)}`;
};

export default {
  makeAuthorizationUrl,
};
