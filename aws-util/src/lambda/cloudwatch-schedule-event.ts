import {Context, ScheduledEvent} from 'aws-lambda';

export type ScheduleEventHandler<T = ScheduledEvent> = (
  event: T,
  context: Context
) => void;
