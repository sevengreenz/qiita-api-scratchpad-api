import qiitaFunc from '../../domain/qiita-domain';

describe('makeAuthorizationUrl', () => {
  it('success', () => {
    // tslint:disable-next-line:max-line-length
    const expectedResult = 'http://qiita.com/api/v2/oauth/authorize?client_id=&scope=read_qiita%20write_qiita&state=scratchpad';

    expect(qiitaFunc.makeAuthorizationUrl()).toBe(expectedResult);
  });
});
