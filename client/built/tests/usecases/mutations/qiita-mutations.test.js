import qiitaMutations from '../../../src/presentation/store/qiita/mutations';
import qiitaStore from '../../../src/presentation/store/qiita/state';
describe('qiita mutations', function () {
    var state;
    beforeEach(function () {
        state = qiitaStore.createInitialState();
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