import { router } from '../trpc';
import { authRouter } from './auth';
import { familiesRouter } from './families';
import { peopleRouter } from './people';

export const appRouter = router({
  families: familiesRouter,
  people: peopleRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
