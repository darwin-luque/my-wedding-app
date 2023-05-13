import { invitationsRouter } from './invitation';
import { familiesRouter } from './families';
import { assetsRouter } from './assets';
import { peopleRouter } from './people';
import { authRouter } from './auth';
import { router } from '../trpc';
import { faqRouter } from './faq';
import { eventsRouter } from './events';

export const appRouter = router({
  invitations: invitationsRouter,
  families: familiesRouter,
  people: peopleRouter,
  assets: assetsRouter,
  events: eventsRouter,
  auth: authRouter,
  faq: faqRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
