import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VariableUpdateManyWithoutNamespaceNestedInputObjectSchema as VariableUpdateManyWithoutNamespaceNestedInputObjectSchema } from './VariableUpdateManyWithoutNamespaceNestedInput.schema';
import { SecretUpdateManyWithoutNamespaceNestedInputObjectSchema as SecretUpdateManyWithoutNamespaceNestedInputObjectSchema } from './SecretUpdateManyWithoutNamespaceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  kestraNamespace: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  variables: z.lazy(() => VariableUpdateManyWithoutNamespaceNestedInputObjectSchema).optional(),
  secrets: z.lazy(() => SecretUpdateManyWithoutNamespaceNestedInputObjectSchema).optional()
}).strict();
export const NamespaceUpdateWithoutWorkflowsInputObjectSchema: z.ZodType<Prisma.NamespaceUpdateWithoutWorkflowsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUpdateWithoutWorkflowsInput>;
export const NamespaceUpdateWithoutWorkflowsInputObjectZodSchema = makeSchema();
