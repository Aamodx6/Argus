import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");
    const secretKey = authHeader?.replace(/^Bearer\s+/i, "") ?? new URL(req.url).searchParams.get("secretKey");

    if (secretKey) {
      const quota = await db.apiQuota.findUnique({
        where: { secretKey },
        include: { user: { select: { id: true, name: true, email: true } } },
      });

      if (quota) {
        return NextResponse.json({
          success: true,
          quota: {
            secretKey: quota.secretKey,
            requestsUsed: quota.requestsUsed,
            maxRequests: quota.maxRequests,
            lastResetDate: quota.lastResetDate,
          },
          user: quota.user,
        }, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        });
      }
    }

    // Default or first active quota if no key provided
    const firstQuota = await db.apiQuota.findFirst({
      include: { user: { select: { id: true, name: true, email: true } } },
    });

    if (firstQuota) {
      return NextResponse.json({
        success: true,
        quota: {
          secretKey: firstQuota.secretKey,
          requestsUsed: firstQuota.requestsUsed,
          maxRequests: firstQuota.maxRequests,
          lastResetDate: firstQuota.lastResetDate,
        },
        user: firstQuota.user,
      }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    return NextResponse.json({ error: "No quota found" }, {
      status: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    console.error("Quota API error:", err);
    return NextResponse.json({ error: "Internal server error" }, {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
