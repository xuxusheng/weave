import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WorkflowUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema as WorkflowUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema } from './WorkflowUncheckedCreateNestedManyWithoutNamespaceInput.schema';
import { SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema as SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema } from './SecretUncheckedCreateNestedManyWithoutNamespaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  kestraNamespace: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workflows: z.lazy(() => WorkflowUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema).optional(),
  secrets: z.lazy(() => SecretUncheckedCreateNestedManyWithoutNamespaceInputObjectSchema).optional()
}).strict();
export const NamespaceUncheckedCreateWithoutVariablesInputObjectSchema: z.ZodType<Prisma.NamespaceUncheckedCreateWithoutVariablesInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUncheckedCreateWithoutVariablesInput>;
export const NamespaceUncheckedCreateWithoutVariablesInputObjectZodSchema = makeSchema();
