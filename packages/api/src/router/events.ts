import { createEventHandler } from '../handlers/events/create';
import { listEventsHandler } from '../handlers/events/list';
import { router } from '../trpc';

export const eventsRouter = router({
  create: createEventHandler,
  list: listEventsHandler,
});
