import * as z from 'zod';
export const NamespaceUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  workflows: z.array(z.unknown()),
  variables: z.array(z.unknown()),
  secrets: z.array(z.unknown())
}));