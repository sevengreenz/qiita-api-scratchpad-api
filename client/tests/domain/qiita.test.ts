import qiitaFunc from '../../src/domain/qiita';

describe('qiita', () => {
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

  describe('extractUrlParams', () => {
    const received = qiitaFunc.extractUrlParams('/hoge/:comment_id/huga/:user_id');

    it('should return object has comment_id', () => {
      expect(received).toHaveProperty('comment_id');
    });

    it('should return object has user_id', () => {
      expect(received).toHaveProperty('user_id');
    });
  });

  describe('embedUrlParams', () => {
    it('shuld return embeded', () => {
      expect(
        qiitaFunc.embedUrlParams('/hoge/:comment_id/huga/:user_id', { comment_id: '1', user_id: '20' }),
      ).toBe('/hoge/1/huga/20');
    });
  });
});
