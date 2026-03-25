import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NamespaceCreateNestedOneWithoutSecretsInputObjectSchema as NamespaceCreateNestedOneWithoutSecretsInputObjectSchema } from './NamespaceCreateNestedOneWithoutSecretsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  value: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  namespace: z.lazy(() => NamespaceCreateNestedOneWithoutSecretsInputObjectSchema)
}).strict();
export const SecretCreateInputObjectSchema: z.ZodType<Prisma.SecretCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretCreateInput>;
export const SecretCreateInputObjectZodSchema = makeSchema();
