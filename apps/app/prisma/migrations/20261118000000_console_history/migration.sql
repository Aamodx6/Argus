CREATE TABLE "ConsoleAnalysis" (
    "id" TEXT PRIMARY KEY,
    "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    "title" TEXT NOT NULL,
    "spaceId" TEXT NOT NULL,
    "spaceName" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AWAITING_SUBMISSION',
    "code" TEXT,
    "analysis" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "ConsoleAnalysis_userId_createdAt_idx" ON "ConsoleAnalysis"("userId", "createdAt");

CREATE TABLE "AnalysisChatTurn" (
    "id" TEXT PRIMARY KEY,
    "jobId" TEXT NOT NULL REFERENCES "ConsoleAnalysis"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "AnalysisChatTurn_jobId_createdAt_id_idx" ON "AnalysisChatTurn"("jobId", "createdAt", "id");
