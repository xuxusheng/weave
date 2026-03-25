import * as z from 'zod';

export const WorkflowReleaseScalarFieldEnumSchema = z.enum(['id', 'workflowId', 'version', 'name', 'nodes', 'edges', 'inputs', 'variables', 'yaml', 'publishedAt', 'createdAt'])

export type WorkflowReleaseScalarFieldEnum = z.infer<typeof WorkflowReleaseScalarFieldEnumSchema>;