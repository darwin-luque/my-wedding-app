import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { PersonRole } from '@acme/db';

export const peopleRouter = router({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        role: z.enum([
          PersonRole.BEST_MAN,
          PersonRole.BRIDESMAID,
          PersonRole.GROOMSMAN,
          PersonRole.MAID_OF_HONOR,
          PersonRole.BRIDES_FATHER,
          PersonRole.BRIDES_MOTHER,
          PersonRole.GROOMS_FATHER,
          PersonRole.GROOMS_MOTHER,
          PersonRole.FLOWER_GIRL,
          PersonRole.RING_BEARER,
          PersonRole.NONE,
        ]),
        isChild: z.boolean(),
        familyId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.person.create({
        data: input,
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
