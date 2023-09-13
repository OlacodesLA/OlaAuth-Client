export interface IResponseType {
  error: boolean;
  serverResponse: {
    [key: string]: any;
  };
}
