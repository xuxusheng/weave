import * as z from 'zod';

export const WorkflowScalarFieldEnumSchema = z.enum(['id', 'name', 'flowId', 'namespaceId', 'description', 'nodes', 'edges', 'inputs', 'variables', 'disabled', 'publishedVersion', 'createdAt', 'updatedAt'])

export type WorkflowScalarFieldEnum = z.infer<typeof WorkflowScalarFieldEnumSchema>;