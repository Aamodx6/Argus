import type { PlanPurchase, PlanTier } from "@prisma/client";

function nextMonth(date: Date) {
  const end = new Date(date);
  end.setUTCDate(1);
  end.setUTCMonth(end.getUTCMonth() + 1);
  const lastDay = new Date(end);
  lastDay.setUTCMonth(lastDay.getUTCMonth() + 1, 0);
  end.setUTCDate(Math.min(date.getUTCDate(), lastDay.getUTCDate()));
  return end;
}

// Purchases are ordered by the time the server first verified capture.
export function activePlan(purchases: Pick<PlanPurchase, "plan" | "createdAt">[], now = new Date()) {
  const periods = new Map<PlanTier, Date>();
  let active: { plan: PlanTier; expiresAt: Date | null } = { plan: "STARTER", expiresAt: null };
  for (const { plan, createdAt } of purchases) {
    if (createdAt > now) break;
    const previous = periods.get(plan);
    const expiresAt = nextMonth(previous && previous > createdAt ? previous : createdAt);
    periods.set(plan, expiresAt);
    if (expiresAt > now) active = { plan, expiresAt };
  }
  return active;
}
