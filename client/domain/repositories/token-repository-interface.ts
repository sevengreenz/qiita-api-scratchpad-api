import { AxiosRequestConfig, AxiosInstance } from 'axios';

export interface ITokenRepository {
  (createHttpClient: (requestConfig: AxiosRequestConfig) => AxiosInstance): {
    issue: (code: string) => Promise<string>;
    get: () => string | null;
    set: (token: string) => void;
  };
}

