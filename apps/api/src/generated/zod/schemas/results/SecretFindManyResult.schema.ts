import * as z from 'zod';
export const SecretFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  namespaceId: z.string(),
  key: z.string(),
  value: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  namespace: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});