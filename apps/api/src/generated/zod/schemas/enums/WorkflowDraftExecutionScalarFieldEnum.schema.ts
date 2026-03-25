import * as z from 'zod';

export const WorkflowDraftExecutionScalarFieldEnumSchema = z.enum(['id', 'workflowId', 'kestraExecId', 'nodes', 'edges', 'inputs', 'variables', 'inputValues', 'state', 'taskRuns', 'triggeredBy', 'startedAt', 'endedAt', 'createdAt', 'updatedAt'])

export type WorkflowDraftExecutionScalarFieldEnum = z.infer<typeof WorkflowDraftExecutionScalarFieldEnumSchema>;