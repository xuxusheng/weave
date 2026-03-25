import * as z from 'zod';
export const SecretUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  namespaceId: z.string(),
  key: z.string(),
  value: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  namespace: z.unknown()
}));