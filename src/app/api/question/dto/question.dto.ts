import { formatZodError } from '@/utils/validate/helper.validate';
import { Prisma } from '@prisma/client';
import { ZodError, z } from 'zod';

export const questionZ = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email format'),
  subject: z.string().min(10),
  message: z.string().min(20),
});

export const questionValidate = <T>(input: T) => {
  const { success, error = null, data } = questionZ.safeParse(input) as { success: boolean; error: ZodError; data: Prisma.QuestionsCreateInput };
  const errorObject = formatZodError(error);

  return { success, error: errorObject, data };
};
