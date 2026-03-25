import * as z from 'zod';

export const WorkflowDraftScalarFieldEnumSchema = z.enum(['id', 'workflowId', 'nodes', 'edges', 'inputs', 'variables', 'message', 'createdAt'])

export type WorkflowDraftScalarFieldEnum = z.infer<typeof WorkflowDraftScalarFieldEnumSchema>;