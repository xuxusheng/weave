import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VariableWhereInputObjectSchema as VariableWhereInputObjectSchema } from './VariableWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => VariableWhereInputObjectSchema).optional(),
  some: z.lazy(() => VariableWhereInputObjectSchema).optional(),
  none: z.lazy(() => VariableWhereInputObjectSchema).optional()
}).strict();
export const VariableListRelationFilterObjectSchema: z.ZodType<Prisma.VariableListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VariableListRelationFilter>;
export const VariableListRelationFilterObjectZodSchema = makeSchema();
