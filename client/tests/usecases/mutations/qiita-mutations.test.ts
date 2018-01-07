import * as assert from 'assert';
import qiitaMutations from '../../../presentation/store/qiita/mutations';
import qiitaDomain, { IQiitaState, IApiResponse } from '../../../domain/qiita';

describe('qiita mutations', () => {
  let state: IQiitaState;

  beforeEach(() => {
    state = qiitaDomain.createInitialState();
  });

  it('setApiResponse', () => {
    const apiResponse: IApiResponse = {
      headers: 'headers',
      data: 'data',
    };

    qiitaMutations.setApiResponse(state, apiResponse);

    assert.equal(state.apiResponse, apiResponse);
  });

});
