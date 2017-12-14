import * as assert from 'assert';
import qiitaDomain from '../../domain/qiita';

describe('removeUndefinedProperty', () => {
  it('success', () => {
    const obj = {
      apple: 'hoge',
      banana: 1,
      cookie: { coke: 'cheese' },
      diamond: undefined,
    };

    const expectedResult = {
      apple: 'hoge',
      banana: 1,
      cookie: { coke: 'cheese' },
    };

    assert.deepEqual(qiitaDomain.removeUndefinedProperty(obj), expectedResult);
  });
});
