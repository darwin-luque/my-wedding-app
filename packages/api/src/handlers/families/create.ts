import { z } from 'zod';
import { protectedProcedure } from '../../trpc';

export const createFamilyHandler = protectedProcedure
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
