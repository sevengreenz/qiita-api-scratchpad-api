import qiitaMutations from '../../../presentation/store/qiita/mutations';
import qiitaFunc from '../../../domain/qiita';
describe('qiita mutations', function () {
    var state;
    beforeEach(function () {
        state = qiitaFunc.createInitialState();
    });
    it('setApiResponse', function () {
        var apiResponse = {
            headers: 'headers',
            data: 'data',
        };
        qiitaMutations.setApiResponse(state, apiResponse);
        expect(state.apiResponse).toBe(apiResponse);
    });
});
//# sourceMappingURL=qiita-mutations.test.js.map