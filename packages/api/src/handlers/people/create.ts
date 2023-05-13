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
    }),
  )
  .mutation(({ ctx, input }) => {
    return ctx.prisma.person.create({
      data: {
        ...input,
        role: stringToPersonRole(input.role),
      },
      include: {
        family: true,
      },
    });
  });
