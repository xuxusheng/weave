import * as z from 'zod';
export const SecretDeleteManyResultSchema = z.object({
  count: z.number()
});