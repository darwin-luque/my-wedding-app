import z from 'zod';
import { stringToPersonRole } from '../../utils/string-to-person-role';
import { publicProcedure } from '../../trpc';

export const createPersonHandler = publicProcedure
  .input(
    z.object({
      name: z.string(),
      role: z.string(),
      isChild: z.boolean(),
      familyId: z.string(),
      picture: z.string().optional(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    // check if family already has an invitation
    const invitation = await ctx.prisma.invitation.findUnique({
      where: {
        familyId: input.familyId,
      },
    });

    return ctx.prisma.person.create({
      data: {
        ...input,
        role: stringToPersonRole(input.role),
        status: !!invitation ? 'PENDING' : 'IDLE',
      },
      include: {
        family: true,
      },
    });
  });
