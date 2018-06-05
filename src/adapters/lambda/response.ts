export interface IResponse {
  statusCode: number;
  headers: { [key: string]: string };
  body: string;
}

const create = (
  statusCode: number,
  headers: { [key: string]: string },
  body: any
): IResponse => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
  };

  const response: IResponse = {
    statusCode,
    headers: Object.assign(headers, corsHeaders),
    body: JSON.stringify(body),
  };

  console.log(response);
  return response;
};

export default {
  create,
};
