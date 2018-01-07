export interface ITokenRepository {
  get: () => string | null;
  set: (token: string) => void;
}

