import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkflowDraftUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema as WorkflowDraftUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema } from './WorkflowDraftUncheckedUpdateManyWithoutWorkflowNestedInput.schema';
import { WorkflowReleaseUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema as WorkflowReleaseUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema } from './WorkflowReleaseUncheckedUpdateManyWithoutWorkflowNestedInput.schema';
import { WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema as WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema } from './WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowNestedInput.schema';
import { WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema as WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema } from './WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  flowId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  namespaceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  disabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  publishedVersion: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  drafts: z.lazy(() => WorkflowDraftUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema).optional(),
  releases: z.lazy(() => WorkflowReleaseUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema).optional(),
  executions: z.lazy(() => WorkflowDraftExecutionUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema).optional(),
  prodExecutions: z.lazy(() => WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInputObjectSchema).optional()
}).strict();
export const WorkflowUncheckedUpdateWithoutTriggersInputObjectSchema: z.ZodType<Prisma.WorkflowUncheckedUpdateWithoutTriggersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUncheckedUpdateWithoutTriggersInput>;
export const WorkflowUncheckedUpdateWithoutTriggersInputObjectZodSchema = makeSchema();
