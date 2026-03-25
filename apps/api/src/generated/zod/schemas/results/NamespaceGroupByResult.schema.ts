import * as z from 'zod';
export const NamespaceGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    kestraNamespace: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    workflows: z.number(),
    variables: z.number(),
    secrets: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    kestraNamespace: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    kestraNamespace: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));