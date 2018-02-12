import qiitaFunc from '../../src/domain/qiita';
describe('qiita', function () {
    describe('removeUndefinedProperty', function () {
        it('success', function () {
            var obj = {
                apple: 'hoge',
                banana: 1,
                cookie: { coke: 'cheese' },
                diamond: undefined,
            };
            var expectedResult = {
                apple: 'hoge',
                banana: 1,
                cookie: { coke: 'cheese' },
            };
            expect(qiitaFunc.removeUndefinedProperty(obj)).toEqual(expectedResult);
        });
    });
    describe('extractUrlParams', function () {
        var received = qiitaFunc.extractUrlParams('/hoge/:comment_id/huga/:user_id');
        it('should return object has comment_id', function () {
            expect(received).toHaveProperty('comment_id');
        });
        it('should return object has user_id', function () {
            expect(received).toHaveProperty('user_id');
        });
    });
    describe('embedUrlParams', function () {
        it('shuld return embeded', function () {
            expect(qiitaFunc.embedUrlParams('/hoge/:comment_id/huga/:user_id', { comment_id: 1, user_id: 20 })).toBe('/hoge/1/huga/20');
        });
    });
});
//# sourceMappingURL=qiita.test.js.map