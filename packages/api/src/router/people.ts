import { createPersonHandler } from '../handlers/people/create';
import { listPeopleHandler } from '../handlers/people/list';
import { router } from '../trpc';

export const peopleRouter = router({
  create: createPersonHandler,
  list: listPeopleHandler,
});
