import IOutputPort from '../../../usecases/contracts/output-port-interface';

export interface IResponse {
  statusCode: number;
  headers: { [key: string]: string };
  body: string;
}

const makeResponse = (
  statusCode: number,
  headers: { [key: string]: string },
  body: any,
): IResponse => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
  };

  const response: IResponse = {
    statusCode,
    headers: Object.assign(headers, corsHeaders),
    body: JSON.stringify(body),
  };

  return response;
};

const qiitaOutputPort: IOutputPort = (callback) => {
  return {
    outputSuccess: (result) => {
      console.log(result);

      const response = makeResponse(200, {}, result);

      callback(undefined, response);
    },

    outputFailure: (result) => {
      console.log(result);

      const response = makeResponse(result.status, result.headers, result.data);

      callback(undefined, response);
    },

    outputRedirection: (locationUrl) => {
      const locationHeader = {
        Location: locationUrl,
      };

      const response = makeResponse(302, locationHeader, '');

      callback(undefined, response);
    },

  };
};

export default qiitaOutputPort;
