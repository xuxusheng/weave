import * as z from 'zod';
// prettier-ignore
export const NamespaceInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    kestraNamespace: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workflows: z.array(z.unknown()),
    variables: z.array(z.unknown()),
    secrets: z.array(z.unknown())
}).strict();

export type NamespaceInputType = z.infer<typeof NamespaceInputSchema>;
