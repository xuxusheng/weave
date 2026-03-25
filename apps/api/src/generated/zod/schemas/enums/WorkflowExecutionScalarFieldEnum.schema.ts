import * as z from 'zod';

export const WorkflowExecutionScalarFieldEnumSchema = z.enum(['id', 'workflowId', 'releaseId', 'kestraExecId', 'inputValues', 'state', 'taskRuns', 'triggeredBy', 'startedAt', 'endedAt', 'createdAt', 'updatedAt'])

export type WorkflowExecutionScalarFieldEnum = z.infer<typeof WorkflowExecutionScalarFieldEnumSchema>;