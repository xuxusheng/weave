import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  namespaceId: z.string(),
  key: z.string()
}).strict();
export const SecretNamespaceIdKeyCompoundUniqueInputObjectSchema: z.ZodType<Prisma.SecretNamespaceIdKeyCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SecretNamespaceIdKeyCompoundUniqueInput>;
export const SecretNamespaceIdKeyCompoundUniqueInputObjectZodSchema = makeSchema();
