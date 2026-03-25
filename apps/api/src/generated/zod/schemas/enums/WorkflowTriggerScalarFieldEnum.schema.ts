import * as z from 'zod';

export const WorkflowTriggerScalarFieldEnumSchema = z.enum(['id', 'workflowId', 'name', 'type', 'config', 'inputs', 'kestraFlowId', 'disabled', 'createdAt', 'updatedAt'])

export type WorkflowTriggerScalarFieldEnum = z.infer<typeof WorkflowTriggerScalarFieldEnumSchema>;