import { createFamilyHandler, listFamiliesHandler } from '../handlers/families';
import { router } from '../trpc';

export const familiesRouter = router({
  create: createFamilyHandler,
  list: listFamiliesHandler,
});
