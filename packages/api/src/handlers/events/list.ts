import { publicProcedure } from '../../trpc';

export const listEventsHandler = publicProcedure.query(({ ctx }) => {
  return ctx.prisma.event.findMany({
    orderBy: {
      startsAt: 'asc',
    },
  });
});
