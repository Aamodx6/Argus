import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export const guardedJobId = z.string().regex(/^[a-f0-9]{32}$/);
export const legacyJobId = z.string().regex(/^c[a-z0-9]{24}$/);
export const jobId = guardedJobId.or(legacyJobId);
const jobInput = z.object({
  upload_id: jobId,
  title: z.string().trim().min(1).max(255),
  spaceId: z.string().regex(/^(default|[a-f0-9-]{36})$/),
  spaceName: z.string().trim().min(1).max(50),
});

export async function consoleUserId() {
  return (await auth())?.user?.id;
}

export async function consoleApiKey(userId: string) {
  const quota = await db.apiQuota.findUnique({ where: { userId }, select: { secretKey: true } });
  return quota?.secretKey;
}

export function findJob(userId: string, id: string) {
  return db.consoleAnalysis.findUnique({ where: { id, userId } });
}

export async function prepareJob(userId: string, body: unknown, legacyId?: string) {
  const input = jobInput.safeParse(body);
  if (!input.success) return null;
  const { upload_id: id, ...details } = input.data;
  if (legacyId ? id !== legacyId : !guardedJobId.safeParse(id).success) return null;
  const job = await db.consoleAnalysis.upsert({
    where: { id },
    update: {},
    create: { id, userId, ...details },
  });
  return job.userId === userId ? job : null;
}

export async function recordJobResponse(userId: string, id: string, polling: boolean, response: Response) {
  const where = { id, userId };
  if (!polling) {
    if (response.ok) {
      await db.consoleAnalysis.updateMany({
        where: { ...where, status: "AWAITING_SUBMISSION" }, data: { status: "ACCEPTED" },
      });
    }
    return;
  }
  if (response.status === 404) {
    await db.consoleAnalysis.updateMany({
      where: { ...where, status: { notIn: ["AWAITING_SUBMISSION", "SUCCEEDED", "FAILED", "BLOCKED"] } },
      data: { status: "EXPIRED" },
    });
    return;
  }
  if (!response.ok && response.status !== 422) return;
  const result = z.object({
    status: z.string(),
    code: z.string().optional(),
    analysis: z.object({ utterances: z.array(z.unknown()) }).passthrough().optional(),
  }).safeParse(await response.json());
  if (!result.success || (result.data.status === "SUCCEEDED" && !result.data.analysis)) return;
  const { status, code, analysis } = result.data;
  await db.consoleAnalysis.updateMany({
    where: { ...where, status: { notIn: ["SUCCEEDED", "FAILED", "BLOCKED"] } },
    data: { status, code, ...(analysis && { analysis: analysis as Prisma.InputJsonValue }) },
  });
}
