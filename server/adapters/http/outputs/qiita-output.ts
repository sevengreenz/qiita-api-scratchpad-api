import * as lambda from 'aws-lambda';
import IOutputPort from '../../../usecases/contracts/output-port';

export interface IResponse {
  statusCode: number;
  headers: { [key: string]: string };
  body: string;
}

export default class QiitaOutput implements IOutputPort {

  constructor(private callback: lambda.Callback) { }

  private makeResponse = (
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
  }

  public outputSuccess = (result: any) => {
    const response = this.makeResponse(200, {}, result);

    this.callback(undefined, response);
  }

  public outputRedirection = (locationUrl: string) => {
    const locationHeader = {
      Location: locationUrl,
    };

    const response = this.makeResponse(302, locationHeader, '');

    this.callback(undefined, response);
  }
}
