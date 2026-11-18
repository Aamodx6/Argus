import { consoleUserId } from "~/server/console-jobs";
import { db } from "~/server/db";
import { moderationRequired } from "~/lib/guardrails";

export async function GET() {
  const userId = await consoleUserId();
  const headers = { "Cache-Control": "no-store" };
  if (!userId) return Response.json({ error: "Sign in to see your analyses." }, { status: 401, headers });
  try {
    const [analyses, videos] = await Promise.all([
      db.consoleAnalysis.findMany({
        where: { userId },
        orderBy: [{ createdAt: "asc" }, { id: "asc" }],
        select: { id: true, title: true, spaceId: true, spaceName: true, status: true, code: true },
      }),
      db.videoFile.findMany({
        where: { userId },
        orderBy: [{ createdAt: "asc" }, { id: "asc" }],
        select: { id: true, createdAt: true },
      }),
    ]);
    return Response.json({ analyses, videos, guarded: moderationRequired() }, { headers });
  } catch (error) {
    console.error("Console history lookup failed", error instanceof Error ? error.name : "Unknown error");
    return Response.json({ error: "Could not load analysis history. Try again." }, { status: 503, headers });
  }
}
