import * as assert from 'assert';
import util from '../util';

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

    assert.deepEqual(util.removeUndefinedProperty(obj), expectedResult);
  });
});
