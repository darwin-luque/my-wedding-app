import { listPartyPeopleHandler } from '../handlers/people/list-party';
import { createPersonHandler } from '../handlers/people/create';
import { listPeopleHandler } from '../handlers/people/list';
import { router } from '../trpc';

export const peopleRouter = router({
  listParty: listPartyPeopleHandler,
  create: createPersonHandler,
  list: listPeopleHandler,
});
