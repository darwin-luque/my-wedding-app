import { z } from 'zod';
import { publicProcedure } from '../../trpc';
import { stringToWho } from '../../utils/string-to-who';

export const createInvitationHandler = publicProcedure
  .input(
    z.object({
      by: z.string(),
      familyId: z.string(),
    }),
  )
  .mutation(({ ctx, input }) => {
    return ctx.prisma.invitation.create({
      data: {
        ...input,
        by: stringToWho(input.by),
      },
      include: {
        family: true,
      },
    });
  });
