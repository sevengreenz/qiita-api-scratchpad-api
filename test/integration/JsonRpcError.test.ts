import JsonRpcController from '../../src/adapters/rpc/handlers/JsonRpcController';

describe('JSON RPC  test', () => {
  it('should be parse error', () => {
    const response = JsonRpcController({
      headers: {},
      body: 'invalid json'
    });

    expect(response).resolves.toEqual({
      jsonrpc: '2.0',
      id: null,
      error: {
        code: -32700,
        message: 'Parse error'
      }
    })
  })

  it('should be method not found error', () => {
    const body = {
      jsonrpc: '2.0',
      id: 'test_id',
      method: 'not found',
      params: []
    }

    const response = JsonRpcController({
      headers: {},
      body: JSON.stringify(body)
    });

    expect(response).resolves.toEqual({
      jsonrpc: '2.0',
      id: 'test_id',
      error: {
        code: -32601,
        message: 'Method not found'
      }
    })
  })
})
