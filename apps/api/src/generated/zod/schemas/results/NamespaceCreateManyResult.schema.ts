import * as z from 'zod';
export const NamespaceCreateManyResultSchema = z.object({
  count: z.number()
});