import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkflowUncheckedUpdateManyWithoutNamespaceNestedInputObjectSchema as WorkflowUncheckedUpdateManyWithoutNamespaceNestedInputObjectSchema } from './WorkflowUncheckedUpdateManyWithoutNamespaceNestedInput.schema';
import { VariableUncheckedUpdateManyWithoutNamespaceNestedInputObjectSchema as VariableUncheckedUpdateManyWithoutNamespaceNestedInputObjectSchema } from './VariableUncheckedUpdateManyWithoutNamespaceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  kestraNamespace: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  workflows: z.lazy(() => WorkflowUncheckedUpdateManyWithoutNamespaceNestedInputObjectSchema).optional(),
  variables: z.lazy(() => VariableUncheckedUpdateManyWithoutNamespaceNestedInputObjectSchema).optional()
}).strict();
export const NamespaceUncheckedUpdateWithoutSecretsInputObjectSchema: z.ZodType<Prisma.NamespaceUncheckedUpdateWithoutSecretsInput> = makeSchema() as unknown as z.ZodType<Prisma.NamespaceUncheckedUpdateWithoutSecretsInput>;
export const NamespaceUncheckedUpdateWithoutSecretsInputObjectZodSchema = makeSchema();
