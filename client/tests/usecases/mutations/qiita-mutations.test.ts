import qiitaMutations from '../../../presentation/store/qiita/mutations';
import qiitaFunc, { IQiitaState, IApiResponse } from '../../../domain/qiita';

describe('qiita mutations', () => {
  let state: IQiitaState;

  beforeEach(() => {
    state = qiitaFunc.createInitialState();
  });

  it('setApiResponse', () => {
    const apiResponse: IApiResponse = {
      headers: 'headers',
      data: 'data',
    };

    qiitaMutations.setApiResponse(state, apiResponse);

    expect(state.apiResponse).toBe(apiResponse);
  });

});
