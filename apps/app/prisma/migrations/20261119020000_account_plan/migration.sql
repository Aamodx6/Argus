CREATE TYPE "PlanTier" AS ENUM ('STARTER', 'PROFESSIONAL', 'BUSINESS');

CREATE TABLE "PlanPurchase" (
    "orderId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "plan" "PlanTier" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PlanPurchase_pkey" PRIMARY KEY ("orderId"),
    CONSTRAINT "PlanPurchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "PlanPurchase_userId_plan_idx" ON "PlanPurchase"("userId", "plan");
