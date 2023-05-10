import { publicProcedure } from '../../trpc';

export const listFamiliesHandler = publicProcedure.query(({ ctx }) =>
  ctx.prisma.family.findMany({
    include: {
      invitation: true,
      _count: {
        select: { people: true },
      },
    },
  }),
);
