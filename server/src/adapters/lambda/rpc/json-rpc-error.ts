export enum JsonRpcError {
  parseError = 'Parse Error',
  InvalidRequest = 'Invalid Request',
  methodNotFound = 'Method Not Found',
  InvalidParams = 'Invalid Params',
  InternalError = 'Internal Error',
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
