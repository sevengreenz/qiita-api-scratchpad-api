import IOutputPort from '../../../../usecases/contracts/output-port-interface';
import response from '../../response';

const qiitaOutputPort: IOutputPort = (callback) => {
  return {
    outputSuccess: (locationUrl: string) => {
      const locationHeader = {
        Location: locationUrl,
      };

      callback(undefined, response.create(302, locationHeader, ''));
    },

    outputFailure: (result) => {
      console.log(result);

      const status = result.status || 500;
      const headers = result.headers || {};

      callback(undefined, response.create(status, headers, result.data));
    },

  };
};

export default qiitaOutputPort;
