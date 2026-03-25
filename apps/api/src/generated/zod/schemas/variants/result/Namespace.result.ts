import * as z from 'zod';
// prettier-ignore
export const NamespaceResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    kestraNamespace: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workflows: z.array(z.unknown()),
    variables: z.array(z.unknown()),
    secrets: z.array(z.unknown())
}).strict();

export type NamespaceResultType = z.infer<typeof NamespaceResultSchema>;
