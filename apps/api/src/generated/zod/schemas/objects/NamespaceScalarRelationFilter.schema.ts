import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceWhereInputObjectSchema as NamespaceWhereInputObjectSchema } from './NamespaceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => NamespaceWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => NamespaceWhereInputObjectSchema).optional()
}).strict();
export const NamespaceScalarRelationFilterObjectSchema: z.ZodType<Prisma.NamespaceScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceScalarRelationFilter>;
export const NamespaceScalarRelationFilterObjectZodSchema = makeSchema();
