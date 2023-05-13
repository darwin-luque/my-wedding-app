import { invitationsRouter } from './invitation';
import { familiesRouter } from './families';
import { assetsRouter } from './assets';
import { peopleRouter } from './people';
import { authRouter } from './auth';
import { router } from '../trpc';

export const appRouter = router({
  invitations: invitationsRouter,
  families: familiesRouter,
  people: peopleRouter,
  assets: assetsRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
