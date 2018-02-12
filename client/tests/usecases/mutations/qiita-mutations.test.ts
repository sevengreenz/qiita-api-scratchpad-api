import qiitaMutations from '../../../src/presentation/store/qiita/mutations';
import qiitaStore, { IQiitaState } from '../../../src/presentation/store/qiita/state';
import { IApiResponse } from '../../../src/domain/qiita';

describe('qiita mutations', () => {
  let state: IQiitaState;

  beforeEach(() => {
    state = qiitaStore.createInitialState();
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
