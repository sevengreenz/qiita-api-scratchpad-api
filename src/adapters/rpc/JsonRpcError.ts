export enum JsonRpcError {
  parseError = 'Parse error',
  InvalidRequest = 'Invalid Request',
  methodNotFound = 'Method not found',
  InvalidParams = 'Invalid params',
  InternalError = 'Internal error',
  Unauthorized = 'Unauthorized',
}

const errorCodeMapper = {
  [JsonRpcError.parseError]: -32700,
  [JsonRpcError.InvalidRequest]: -32600,
  [JsonRpcError.methodNotFound]: -32601,
  [JsonRpcError.InvalidParams]: -32602,
  [JsonRpcError.InternalError]: -32603,
  [JsonRpcError.Unauthorized]: -32604,
};

export default {
  errorCodeMapper,
};
