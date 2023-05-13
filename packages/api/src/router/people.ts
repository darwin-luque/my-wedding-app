import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { stringToPersonRole } from '../utils/string-to-person-role';

export const peopleRouter = router({
  create: publicProcedure
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
    }),
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.person.findMany({
      include: {
        family: {
          include: {
            invitation: true,
          },
        },
      },
    });
  }),
});
