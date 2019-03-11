/**
 * CORS エラーが発生しないよう修正
 * SEE: https://jestjs.io/docs/en/configuration.html#testenvironment-string
 * @jest-environment node
 */

import JsonRpcController from '../../src/adapters/rpc/handlers/JsonRpcController';
import * as JsonRpc from 'jsonrpc';

describe('Execute Qiita Api test', () => {
  describe('Tag Api', () => {
    it('should be success response', async () => {
      const body = {
        jsonrpc: '2.0',
        id: 'tag',
        method: 'executeApi',
        params: {
          url: 'http://qiita.com/api/v2/tags',
          method: 'GET',
          params: {
            page: 1,
            per_page: 2,
            sort: 'count'
          }
        }
      }

      const response = (await JsonRpcController({
        headers: {},
        body: JSON.stringify(body)
      })) as JsonRpc.SuccessResponse;

      expect(response.result).toHaveProperty('headers');
      expect(response.result).toHaveProperty('data');
      expect(response.result).toHaveProperty('status');
    })
  })

})
