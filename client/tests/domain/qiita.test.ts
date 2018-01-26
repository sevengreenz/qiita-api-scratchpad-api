import qiitaFunc from '../../domain/qiita';

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

    expect(
      qiitaFunc.removeUndefinedProperty(obj),
    ).toEqual(expectedResult);
  });
});
