import * as z from 'zod';

export const SecretScalarFieldEnumSchema = z.enum(['id', 'namespaceId', 'key', 'value', 'description', 'createdAt', 'updatedAt'])

export type SecretScalarFieldEnum = z.infer<typeof SecretScalarFieldEnumSchema>;