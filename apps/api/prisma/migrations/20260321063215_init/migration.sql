/*
  Warnings:

  - You are about to drop the column `namespace` on the `workflows` table. All the data in the column will be lost.
  - You are about to drop the column `yaml` on the `workflows` table. All the data in the column will be lost.
  - Added the required column `flowId` to the `workflows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namespaceId` to the `workflows` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "namespaces" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_workflows" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "flowId" TEXT NOT NULL,
    "namespaceId" TEXT NOT NULL,
    "description" TEXT,
    "nodes" JSONB NOT NULL DEFAULT [],
    "edges" JSONB NOT NULL DEFAULT [],
    "inputs" JSONB NOT NULL DEFAULT [],
    "variables" JSONB NOT NULL DEFAULT [],
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "publishedVersion" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "workflows_namespaceId_fkey" FOREIGN KEY ("namespaceId") REFERENCES "namespaces" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_workflows" ("createdAt", "description", "edges", "id", "inputs", "name", "nodes", "updatedAt") SELECT "createdAt", "description", "edges", "id", "inputs", "name", "nodes", "updatedAt" FROM "workflows";
DROP TABLE "workflows";
ALTER TABLE "new_workflows" RENAME TO "workflows";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
