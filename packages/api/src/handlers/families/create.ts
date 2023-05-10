import { z } from 'zod';
import { publicProcedure } from '../../trpc';

export const createFamilyHandler = publicProcedure // temp
  .input(
    z.object({
      name: z.string(),
    }),
  )
  .mutation(({ ctx, input }) => {
    return ctx.prisma.family.create({
      data: input,
    });
  });
