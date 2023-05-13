import { z } from 'zod';
import { publicProcedure } from '../../trpc';

export const createFaqHandler = publicProcedure // temp
  .input(
    z.object({
      question: z.string(),
      answer: z.string(),
    }),
  )
  .mutation(({ ctx, input }) => {
    return ctx.prisma.faq.create({
      data: input,
    });
  });
