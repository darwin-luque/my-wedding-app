import { publicProcedure } from '../../trpc';

export const listInvitationsHandler = publicProcedure.query(({ ctx }) =>
  ctx.prisma.invitation.findMany({
    include: {
      family: true,
    },
  }),
);
