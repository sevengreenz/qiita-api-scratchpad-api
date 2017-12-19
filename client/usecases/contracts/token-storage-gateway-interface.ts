export interface ITokenStorageGateway {
  get: () => string | null;
  set: (token: string) => void;
}

