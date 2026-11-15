import { NextResponse } from "next/server";
import { db } from "~/server/db";

const headers = { "Cache-Control": "no-store" };

export async function GET(req: Request) {
  const secretKey = req.headers.get("authorization")?.match(/^Bearer ([A-Za-z0-9_-]{32,128})$/i)?.[1];
  if (!secretKey) {
    return NextResponse.json({ error: "API key required" }, { status: 401, headers });
  }
  try {
    const quota = await db.apiQuota.findUnique({
      where: { secretKey },
      include: { user: { select: { id: true, name: true, email: true } } },
    });
    if (!quota) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 401, headers });
    }
    return NextResponse.json({
      success: true,
      quota: {
        secretKey: quota.secretKey,
        requestsUsed: quota.requestsUsed,
        maxRequests: quota.maxRequests,
        lastResetDate: quota.lastResetDate,
      },
      user: quota.user,
    }, { headers });
  } catch {
    return NextResponse.json({ error: "Quota unavailable" }, { status: 503, headers });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
