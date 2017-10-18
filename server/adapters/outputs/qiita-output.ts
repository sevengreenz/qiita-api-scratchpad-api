import * as lambda from 'aws-lambda';
import { AxiosResponse } from 'axios';

export namespace QiitaOutput {

  interface IResponse {
    statusCode: number;
    headers: { [key: string]: string };
    body: string;
  }

  const makeResponse = (
    statusCode: number,
    headers: { [key: string]: string },
    body: any,
  ) => {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
    };

    const response: IResponse = {
      statusCode: statusCode as number,
      headers: Object.assign(headers, corsHeaders),
      body: JSON.stringify(body),
    };

    return response;
  };

  export const outputCall = (callback: lambda.Callback, result: AxiosResponse) => {
    const response = makeResponse(200, {}, result);

    callback(undefined, response);
  };

  export const outputAuthorize = (callback: lambda.Callback, locationUrl: string) => {
    const locationHeader = {
      Location: locationUrl,
    };

    const response = makeResponse(302, locationHeader, '');

    callback(undefined, response);
  };
}
