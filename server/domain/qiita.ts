import * as queryString from 'query-string';

export namespace Qiita {

  export const makeAuthorizationUrl = (): string => {
    const params: { [key: string]: string } = {
      client_id: process.env.CLIENT_ID || '',
      scope: 'read_qiita+write_qiita',
      state: 'scratchpad',
    };

    return 'http://qiita.com/api/v2/oauth/authorize?' + queryString.stringify(params);
  };
}

