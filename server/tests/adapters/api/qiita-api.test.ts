import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';
import * as assert from 'assert';
import QiitaApi from '../../../adapters/api/qiita-api';

describe('qiita-api', () => {

  let axiosInstance: AxiosInstance;

  before(() => {
    const mockAdapter = (requestConfig: AxiosRequestConfig): AxiosPromise => {
      return new Promise((resolve, reject) => {
        const response: AxiosResponse = {
          data: 'success',
          status: 200,
          statusText: 'ok',
          headers: 'headers',
          config: requestConfig,
        };

        resolve(response);
      });
    };

    axiosInstance = axios.create({
      adapter: mockAdapter,
    });
  });

  it('failure', async () => {
    const qiitaApi = new QiitaApi(axiosInstance);
    const result = await qiitaApi.execute('GET', '/test', {});

    assert(result.data === 'success');
    assert(result.headers === 'headers');
  });
});
