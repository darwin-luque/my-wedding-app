import { createFamilyHandler } from '../handlers/families/create';
import { listFamiliesHandler } from '../handlers/families/list';
import { router } from '../trpc';

export const familiesRouter = router({
  create: createFamilyHandler,
  list: listFamiliesHandler,
});
