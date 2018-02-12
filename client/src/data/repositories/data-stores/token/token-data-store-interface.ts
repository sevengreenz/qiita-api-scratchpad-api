
export interface ITokenDataStore {
  issue: (code: string) => Promise<string>;
  find: () => string | null;
  update: (token: string) => void;
}
