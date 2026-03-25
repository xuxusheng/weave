import * as z from 'zod';
export const SecretAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    namespaceId: z.number(),
    key: z.number(),
    value: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    namespace: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    namespaceId: z.string().nullable(),
    key: z.string().nullable(),
    value: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    namespaceId: z.string().nullable(),
    key: z.string().nullable(),
    value: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});