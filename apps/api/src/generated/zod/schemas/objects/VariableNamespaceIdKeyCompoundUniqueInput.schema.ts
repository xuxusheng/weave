import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  namespaceId: z.string(),
  key: z.string()
}).strict();
export const VariableNamespaceIdKeyCompoundUniqueInputObjectSchema: z.ZodType<Prisma.VariableNamespaceIdKeyCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VariableNamespaceIdKeyCompoundUniqueInput>;
export const VariableNamespaceIdKeyCompoundUniqueInputObjectZodSchema = makeSchema();
