import * as assert from 'assert';
import qiitaDomain from '../../domain/qiita-domain';

describe('makeAuthorizationUrl', () => {
  it('success', () => {
    // tslint:disable-next-line:max-line-length
    const expectedResult = 'http://qiita.com/api/v2/oauth/authorize?client_id=&scope=read_qiita%2Bwrite_qiita&state=scratchpad';

    assert(qiitaDomain.makeAuthorizationUrl() === expectedResult);
  });
});
