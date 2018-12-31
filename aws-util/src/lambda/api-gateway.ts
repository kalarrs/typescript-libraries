import {
  APIGatewayEvent,
  APIGatewayEventRequestContext,
  APIGatewayProxyResult,
  AuthResponseContext,
  Context,
  Handler
} from 'aws-lambda';

// TODO : Update this in the @types/aws-lambda package.
export interface APIGatewayProxyEvent<T = APIGatewayEventRequestContext> {
  body: string | null;
  headers: { [name: string]: string };
  multiValueHeaders: { [name: string]: string[] };
  httpMethod: string;
  isBase64Encoded: boolean;
  path: string;
  pathParameters: { [name: string]: string } | null;
  queryStringParameters: { [name: string]: string } | null;
  multiValueQueryStringParameters: { [name: string]: string[] } | null;
  stageVariables: { [name: string]: string } | null;
  requestContext: T;
  resource: string;
}

// TODO : Update this in the @types/aws-lambda package.
export interface APIGatewayProxyHandler<T = APIGatewayProxyEvent>  extends Handler<T, APIGatewayProxyResult> {
}

// TODO : Add this to the @types/aws-lambda package.
// API Gateway "websocket" request context
export interface APIGatewayWebsocketEventRequestContext {
  apiId: string;
  authorizer?: AuthResponseContext | null;
  connectedAt: number,
  connectionId: string,
  domainName: string,
  error: string,
  eventType: 'CONNECT' | 'DISCONNECT' | 'DEFAULT' | 'MESSAGE',
  extendedRequestId: string;
  identity: {
    accessKey: string | null;
    accountId: string | null;
    caller: string | null;
    cognitoAuthenticationProvider: string | null;
    cognitoAuthenticationType: string | null;
    cognitoIdentityId: string | null;
    cognitoIdentityPoolId: string | null;
    sourceIp: string;
    user: string | null;
    userAgent: string | null;
    userArn: string | null;
  };
  integrationLatency: string;
  messageDirection: 'IN' | 'OUT';
  messageId: string;
  requestId: string;
  requestTime: string;
  requestTimeEpoch: number;
  routeKey: string,
  stage: string;
  status: string;
}

// TODO : Add this in the @types/aws-lambda package. NOTE: Could also be named ApiGatewayHttpHandler or ApiGatewayRestHandler
export type ApiGatewayHandler = (
  event: APIGatewayEvent,
  context: Context
) => Promise<APIGatewayProxyResult>;


// TODO : Add this in the @types/aws-lambda package.
export type ApiGatewayWebsocketHandler = APIGatewayProxyHandler<APIGatewayProxyEvent<APIGatewayWebsocketEventRequestContext>>;
