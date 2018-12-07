// https://docs.aws.amazon.com/connect/latest/adminguide/connect-lambda-functions.html

import {Context} from 'aws-lambda';

export interface ContactFlowEvent {
  Details: ContactFlowDetails;
  Name: string;
}

export interface ContactFlowDetails {
  ContactData: ContactFlowContactData;
  Parameters: any;
}

export interface ContactFlowContactData {
  Attributes: any;
  Channel: string;
  ContactId: string;
  CustomerEndpoint: ContactFlowCustomerEndpoint;
  InitialContactId: string;
  InitiationMethod: 'INBOUND' | 'OUTBOUND' | 'TRANSFER' | 'CALLBACK';
  InstanceARN: string;
  PreviousContactId: string;
  Queue: string;
  SystemEndpoint: ContactFlowSystemEndpoint;
}

export interface ContactFlowCustomerEndpoint {
  Address: string;
  Type: string;

}

export interface ContactFlowSystemEndpoint {
  Address: string;
  Type: string;
}


export type AmazonConnectHandler = (
  event: ContactFlowEvent,
  context: Context
) => Promise<any>;