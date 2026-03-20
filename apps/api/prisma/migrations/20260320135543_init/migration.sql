-- CreateTable
CREATE TABLE "workflows" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "namespace" TEXT NOT NULL DEFAULT 'company.team',
    "description" TEXT,
    "nodes" JSONB NOT NULL DEFAULT [],
    "edges" JSONB NOT NULL DEFAULT [],
    "inputs" JSONB NOT NULL DEFAULT [],
    "yaml" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
