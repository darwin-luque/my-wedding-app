import { z } from 'zod';
import { publicProcedure } from '../../trpc';

export const updateFaqHandler = publicProcedure // temp
  .input(
    z.object({
      id: z.string(),
      data: z.object({
        question: z.string().optional(),
        answer: z.string().optional(),
      }),
    }),
  )
  .mutation(({ ctx, input }) => {
    return ctx.prisma.faq.update({
      where: {
        id: input.id,
      },
      data: input.data,
    });
  });
