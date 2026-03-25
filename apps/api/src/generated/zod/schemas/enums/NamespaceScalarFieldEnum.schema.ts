import * as z from 'zod';

export const NamespaceScalarFieldEnumSchema = z.enum(['id', 'name', 'kestraNamespace', 'description', 'createdAt', 'updatedAt'])

export type NamespaceScalarFieldEnum = z.infer<typeof NamespaceScalarFieldEnumSchema>;