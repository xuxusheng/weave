import * as z from 'zod';
export const SecretCreateManyResultSchema = z.object({
  count: z.number()
});