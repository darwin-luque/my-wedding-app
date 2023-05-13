import { z } from 'zod';
import { publicProcedure } from '../../trpc';

export const deleteFaqHandler = publicProcedure // temp
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .mutation(({ ctx, input }) => {
    return ctx.prisma.faq.delete({
      where: {
        id: input.id,
      },
    });
  });
