import { router } from '../trpc';
import { authRouter } from './auth';
import { familiesRouter } from './families';

export const appRouter = router({
  auth: authRouter,
  families: familiesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
