import {APIGatewayProxyResult} from 'aws-lambda';

export type apiGatewayHeaders = {
  [header: string]: boolean | number | string;
};

interface ApiJsonResponse<T> {
  statusCode?: number;
  body?: ApiBody<T> | ApiErrorsBody<T>;
  headers?: apiGatewayHeaders;
}

interface ApiBinaryResponse<T> {
  statusCode?: number;
  body?: Buffer | null;
  headers?: apiGatewayHeaders;
}

export interface ApiBody<T, M = Meta> {
  data: T;
  meta?: M;
}

export interface ApiErrorsBody<T, M = Meta> {
  error: T;
  meta?: M;
}

export interface Meta {
}

type options = {
  headers?: apiGatewayHeaders;
};

export class ApiGatewayResponse {
  private _headers: apiGatewayHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json'
  };

  constructor({headers}: options = {}) {
    if (headers) this._headers = headers;
  }

  apiResponseJson<T>({statusCode = 200, body = null, headers = this._headers}: ApiJsonResponse<T>): APIGatewayProxyResult {
    return {
      statusCode,
      body: body ? JSON.stringify(body) : "",
      headers
    };
  }

  apiResponseBinary<T>({statusCode = 200, body = null, headers = this._headers}: ApiBinaryResponse<T>): APIGatewayProxyResult {
    return {
      isBase64Encoded: true,
      statusCode,
      body: body.toString('base64'),
      headers
    };
  }
}