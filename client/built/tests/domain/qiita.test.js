import qiitaFunc from '../../domain/qiita';
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
//# sourceMappingURL=qiita.test.js.map