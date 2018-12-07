import {APIGatewayEvent, APIGatewayProxyResult, Context} from 'aws-lambda';

export type ApiGatewayHandler = (
  event: APIGatewayEvent,
  context: Context
) => Promise<APIGatewayProxyResult>;
