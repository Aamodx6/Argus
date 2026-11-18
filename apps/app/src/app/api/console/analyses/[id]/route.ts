import { consoleUserId, findJob, legacyJobId } from "~/server/console-jobs";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const headers = { "Cache-Control": "no-store" };
  const userId = await consoleUserId();
  if (!userId) return Response.json({ error: "Sign in to view the analysis." }, { status: 401, headers });
  const parsed = legacyJobId.safeParse((await params).id);
  const job = parsed.success && await findJob(userId, parsed.data);
  if (!job) return Response.json({ error: "Job not found." }, { status: 404, headers });
  const { analysis, code } = job;
  const status = job.status === "LEGACY_RUNNING" && Date.now() - job.createdAt.getTime() > 120_000
    ? "AWAITING_SUBMISSION" : job.status;
  return Response.json({ status, analysis, code }, { headers });
}
