import axios, { AxiosRequestConfig } from 'axios';

const createHttpClient = (config: AxiosRequestConfig) => axios.create(config);

export default {
  createHttpClient,
};
