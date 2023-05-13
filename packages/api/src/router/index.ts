import { router } from '../trpc';
import { authRouter } from './auth';
import { familiesRouter } from './families';
import { invitationsRouter } from './invitation';
import { peopleRouter } from './people';

export const appRouter = router({
  invitations: invitationsRouter,
  families: familiesRouter,
  people: peopleRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
