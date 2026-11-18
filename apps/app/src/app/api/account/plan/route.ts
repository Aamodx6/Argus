import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { activePlan } from "~/server/plan-period";

export const dynamic = "force-dynamic";
const headers = { "Cache-Control": "private, no-store" };

export async function GET() {
  try {
    const userId = (await auth())?.user?.id;
    if (!userId) return Response.json({ error: "Sign in to see your plan." }, { status: 401, headers });
    const purchases = await db.planPurchase.findMany({
      where: { userId },
      orderBy: [{ createdAt: "asc" }, { orderId: "asc" }],
      select: { plan: true, createdAt: true },
    });
    return Response.json(activePlan(purchases), { headers });
  } catch {
    return Response.json({ error: "Account plan unavailable." }, { status: 503, headers });
  }
}
