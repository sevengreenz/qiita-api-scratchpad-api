import qiitaFunc from '../../domain/qiita';

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
});
