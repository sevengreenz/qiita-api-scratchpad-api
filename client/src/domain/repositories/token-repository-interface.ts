export interface ITokenRepository {
  issue: (code: string) => Promise<string>;
  find: () => string | null;
  update: (token: string) => void;
}

