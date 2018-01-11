
export interface IDataStoreFactory<T> {
  createLocalDataStore(): T;
  createCloudDataStore(): T;
}
