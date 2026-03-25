import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceCreateNestedOneWithoutVariablesInputObjectSchema as NamespaceCreateNestedOneWithoutVariablesInputObjectSchema } from './NamespaceCreateNestedOneWithoutVariablesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  value: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  namespace: z.lazy(() => NamespaceCreateNestedOneWithoutVariablesInputObjectSchema)
}).strict();
export const VariableCreateInputObjectSchema: z.ZodType<Prisma.VariableCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableCreateInput>;
export const VariableCreateInputObjectZodSchema = makeSchema();
