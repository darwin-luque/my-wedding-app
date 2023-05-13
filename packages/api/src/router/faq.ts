import { createFaqHandler } from '../handlers/faq/create';
import { deleteFaqHandler } from '../handlers/faq/delete';
import { listFaqsHandler } from '../handlers/faq/list';
import { updateFaqHandler } from '../handlers/faq/update';
import { router } from '../trpc';

export const faqRouter = router({
  create: createFaqHandler,
  list: listFaqsHandler,
  update: updateFaqHandler,
  delete: deleteFaqHandler,
});
