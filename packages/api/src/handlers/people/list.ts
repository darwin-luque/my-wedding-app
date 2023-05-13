import { publicProcedure } from '../../trpc';

export const listPeopleHandler = publicProcedure.query(({ ctx }) => {
  return ctx.prisma.person.findMany({
    include: {
      family: {
        include: {
          invitation: true,
        },
      },
    },
  });
});
