import * as z from 'zod';

export const VariableScalarFieldEnumSchema = z.enum(['id', 'namespaceId', 'key', 'value', 'description', 'createdAt', 'updatedAt'])

export type VariableScalarFieldEnum = z.infer<typeof VariableScalarFieldEnumSchema>;