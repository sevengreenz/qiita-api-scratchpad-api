export interface IQiitaSchemaResponse {
  statusCode: number;
  headers: { [key: string]: string };
  body: string;
}

export interface IResource {
  title: string;
  description: string;
  links: [any];
  properties: { [key: string]: any };
  required: [string];
}

/*
export class Resource implements IResource {
  private title: string;
  private description: string;
  private links: [any];
  private properties: { [key: string]: any };
  private required: [string];

  constructor(params: IResource) {
    this.title = params.title;
    this.description = params.description;
    this.links = params.links;
    this.properties = params.properties;
    this.required = params.required;

  }
}
*/