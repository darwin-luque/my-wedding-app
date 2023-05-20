import { publicProcedure } from '../../trpc';

export const listPartyPeopleHandler = publicProcedure.query(({ ctx }) => {
  return ctx.prisma.person.findMany({
    where: {
      role: {
        not: 'NONE',
      },
    },
    include: {
      family: {
        include: {
          invitation: true,
        },
      },
    },
  });
});
