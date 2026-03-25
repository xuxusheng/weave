import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NamespaceUpdateOneRequiredWithoutWorkflowsNestedInputObjectSchema as NamespaceUpdateOneRequiredWithoutWorkflowsNestedInputObjectSchema } from './NamespaceUpdateOneRequiredWithoutWorkflowsNestedInput.schema';
import { WorkflowDraftUpdateManyWithoutWorkflowNestedInputObjectSchema as WorkflowDraftUpdateManyWithoutWorkflowNestedInputObjectSchema } from './WorkflowDraftUpdateManyWithoutWorkflowNestedInput.schema';
import { WorkflowReleaseUpdateManyWithoutWorkflowNestedInputObjectSchema as WorkflowReleaseUpdateManyWithoutWorkflowNestedInputObjectSchema } from './WorkflowReleaseUpdateManyWithoutWorkflowNestedInput.schema';
import { WorkflowDraftExecutionUpdateManyWithoutWorkflowNestedInputObjectSchema as WorkflowDraftExecutionUpdateManyWithoutWorkflowNestedInputObjectSchema } from './WorkflowDraftExecutionUpdateManyWithoutWorkflowNestedInput.schema';
import { WorkflowExecutionUpdateManyWithoutWorkflowNestedInputObjectSchema as WorkflowExecutionUpdateManyWithoutWorkflowNestedInputObjectSchema } from './WorkflowExecutionUpdateManyWithoutWorkflowNestedInput.schema';
import { WorkflowTriggerUpdateManyWithoutWorkflowNestedInputObjectSchema as WorkflowTriggerUpdateManyWithoutWorkflowNestedInputObjectSchema } from './WorkflowTriggerUpdateManyWithoutWorkflowNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  flowId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  nodes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  edges: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  inputs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  variables: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  disabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  publishedVersion: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  namespace: z.lazy(() => NamespaceUpdateOneRequiredWithoutWorkflowsNestedInputObjectSchema).optional(),
  drafts: z.lazy(() => WorkflowDraftUpdateManyWithoutWorkflowNestedInputObjectSchema).optional(),
  releases: z.lazy(() => WorkflowReleaseUpdateManyWithoutWorkflowNestedInputObjectSchema).optional(),
  executions: z.lazy(() => WorkflowDraftExecutionUpdateManyWithoutWorkflowNestedInputObjectSchema).optional(),
  prodExecutions: z.lazy(() => WorkflowExecutionUpdateManyWithoutWorkflowNestedInputObjectSchema).optional(),
  triggers: z.lazy(() => WorkflowTriggerUpdateManyWithoutWorkflowNestedInputObjectSchema).optional()
}).strict();
export const WorkflowUpdateInputObjectSchema: z.ZodType<Prisma.WorkflowUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUpdateInput>;
export const WorkflowUpdateInputObjectZodSchema = makeSchema();
