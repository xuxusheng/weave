import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SecretNamespaceIdKeyCompoundUniqueInputObjectSchema as SecretNamespaceIdKeyCompoundUniqueInputObjectSchema } from './SecretNamespaceIdKeyCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  namespaceId_key: z.lazy(() => SecretNamespaceIdKeyCompoundUniqueInputObjectSchema).optional()
}).strict();
export const SecretWhereUniqueInputObjectSchema: z.ZodType<Prisma.SecretWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretWhereUniqueInput>;
export const SecretWhereUniqueInputObjectZodSchema = makeSchema();
