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
  .mutation(async ({ ctx, input }) => {
    // create the invitation
    const invitation = await ctx.prisma.invitation.create({
      data: {
        ...input,
        by: stringToWho(input.by),
      },
      include: {
        family: true,
      },
    });

    // update the family's members' status
    await ctx.prisma.person.updateMany({
      where: {
        familyId: input.familyId,
      },
      data: {
        status: 'PENDING',
      },
    });

    return invitation;
  });
