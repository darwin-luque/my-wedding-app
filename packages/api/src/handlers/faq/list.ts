import { publicProcedure } from '../../trpc';

export const listFaqsHandler = publicProcedure.query(({ ctx }) =>
  ctx.prisma.faq.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  }),
);
