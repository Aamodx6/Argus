import {
  InvokeEndpointCommand,
  SageMakerRuntimeClient,
} from "@aws-sdk/client-sagemaker-runtime";
import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "~/env";
import { correlation, emotion, feedbackToken, logSageMakerThrottle, sentiment } from "~/lib/inference-observability";
import { checkAndUpdateQuota } from "~/lib/quota";
import { db } from "~/server/db";
import { moderationRequired } from "~/lib/guardrails";

export const maxDuration = 90;

const analysisSchema = z.object({
  status: z.enum(["low_confidence", "out_of_domain"]).optional(),
  reason_code: z.string().optional(),
  model_version: z.string().optional(),
  utterances: z.array(z.object({
    start_time: z.number(), end_time: z.number(), text: z.string(),
    emotions: z.array(z.object({ label: emotion, confidence: z.number() })),
    sentiments: z.array(z.object({ label: sentiment, confidence: z.number() })),
  })),
}).passthrough();

export async function POST(req: Request) {
  if (moderationRequired()) {
    return NextResponse.json({ error: "Use guarded uploads", code: "MODERATED_UPLOAD_REQUIRED" }, { status: 403 });
  }
  let claimed: { id: string; userId: string } | undefined;
  let modelRequestId: string | undefined;
  let awsRequestId: string | undefined;
  try {
    const workspace = req.headers.get("x-argus-console") === "1" ? await import("~/server/console-jobs") : null;
    const userId = await workspace?.consoleUserId();
    const apiKey = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (workspace ? !userId : !apiKey) {
      return NextResponse.json({ error: "API key required" }, { status: 401 });
    }

    // Find the user by API key
    const quota = await db.apiQuota.findUnique({
      where: {
        ...(userId ? { userId } : { secretKey: apiKey! }),
      },
      select: {
        userId: true,
      },
    });

    if (!quota) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
    }

    const input = (await req.json()) as { key?: unknown; upload_id?: unknown };
    const select = { id: true, userId: true, analyzed: true, key: true } as const;
    const file = workspace
      ? typeof input.upload_id === "string" && await db.videoFile.findUnique({
        where: { id: input.upload_id, userId: quota.userId }, select,
      })
      : typeof input.key === "string" && await db.videoFile.findUnique({ where: { key: input.key }, select });
    if (!file) return NextResponse.json({ error: "File not found" }, { status: 404 });
    if (file.userId !== quota.userId) return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    const { key } = file;

    const prefix = env.AWS_INFERENCE_INPUT_PREFIX;
    if (typeof key !== "string" || !key.startsWith(prefix) ||
        !/^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}\.(mp4|mov|avi)$/i.test(key.slice(prefix.length))) {
      return NextResponse.json({ error: "A valid upload key is required" }, { status: 400 });
    }

    if (workspace) {
      const job = await workspace.prepareJob(quota.userId, input, file.id);
      if (!job) return NextResponse.json({ error: "Invalid upload details" }, { status: 400 });
      if (job.status === "SUCCEEDED" && job.analysis) return NextResponse.json({ analysis: job.analysis });
      if (file.analyzed) return NextResponse.json({ error: "File already analyzed" }, { status: 409 });
      const lease = await db.consoleAnalysis.updateMany({
        where: {
          id: job.id, userId: quota.userId,
          OR: [
            { status: "AWAITING_SUBMISSION" },
            { status: "LEGACY_RUNNING", createdAt: { lt: new Date(Date.now() - 120_000) } },
          ],
        },
        data: { status: "LEGACY_RUNNING", code: null, createdAt: new Date() },
      });
      if (!lease.count) return NextResponse.json({ status: "LEGACY_RUNNING" }, { status: 202 });
      claimed = { id: job.id, userId: quota.userId };
    } else if (file.analyzed) {
      return NextResponse.json(
        { error: "File already analyzed" },
        { status: 400 },
      );
    }

    const hasQuota = await checkAndUpdateQuota(quota.userId, true);

    if (!hasQuota) {
      if (claimed) await db.consoleAnalysis.update({
        where: claimed, data: { status: "AWAITING_SUBMISSION", code: "QUOTA_EXCEEDED" },
      });
      return NextResponse.json(
        { error: "Monthly quota exceeded" },
        { status: 429 },
      );
    }

    // Call sagemaker endpoint
    const sagemakerClient = new SageMakerRuntimeClient({
      region: env.AWS_REGION,
      ...(claimed && { maxAttempts: 1 }),
    });
    const metadata = correlation(quota.userId);
    modelRequestId = metadata.request_id;

    const command = new InvokeEndpointCommand({
      EndpointName: env.AWS_ENDPOINT_NAME,
      ContentType: "application/json",
      Accept: "application/json",
      CustomAttributes: JSON.stringify(metadata),
      Body: JSON.stringify({
        video_path: `s3://${env.AWS_INFERENCE_BUCKET}/${key}`,
      }),
    });

    const response = await sagemakerClient.send(command, claimed ? { abortSignal: AbortSignal.timeout(65_000) } : {});
    awsRequestId = response.$metadata.requestId;
    const analysis = analysisSchema.parse(JSON.parse(new TextDecoder().decode(response.Body)));
    const version = analysis.model_version;
    const time = Date.now();
    const utterances = analysis.utterances.map((item, index) => ({
      ...item,
      feedback_token: version && item.emotions[0] && item.sentiments[0] ? feedbackToken(quota.userId, {
        id: `${metadata.request_id}:${index}`, version, time,
        endpoint: env.AWS_ENDPOINT_NAME, emotion: item.emotions[0].label, sentiment: item.sentiments[0].label,
      }) : undefined,
    }));

    const videoUpdate = db.videoFile.update({
      where: { key },
      data: {
        analyzed: true,
      },
    });

    const result = { ...analysis, utterances };
    if (claimed) {
      await db.$transaction([
        videoUpdate,
        db.consoleAnalysis.update({
          where: claimed, data: { status: "SUCCEEDED", code: null, analysis: result },
        }),
      ]);
      console.info("Console inference saved", { jobId: claimed.id, modelRequestId, awsRequestId });
    } else {
      await videoUpdate;
    }
    return NextResponse.json({ analysis: result });
  } catch (error) {
    if (claimed) {
      await db.consoleAnalysis.updateMany({
        where: { ...claimed, status: "LEGACY_RUNNING" },
        data: { status: "AWAITING_SUBMISSION", code: "SAGEMAKER_UNAVAILABLE" },
      }).catch(() => console.error("Could not release console analysis lease"));
    }
    if (error instanceof Error && (
      error.name === "ThrottlingException" ||
      ("$metadata" in error && (error.$metadata as { httpStatusCode?: number })?.httpStatusCode === 429)
    )) {
      logSageMakerThrottle();
      return NextResponse.json({ error: "Inference capacity is busy" }, { status: 503 });
    }
    const failure = error as { name?: string; $metadata?: { requestId?: string; httpStatusCode?: number } } | null;
    console.error("Sentiment inference failed", {
      jobId: claimed?.id,
      modelRequestId,
      awsRequestId: awsRequestId ?? failure?.$metadata?.requestId,
      awsStatus: failure?.$metadata?.httpStatusCode,
      errorName: failure?.name,
    });
    return NextResponse.json(
      { error: claimed ? "SageMaker analysis is unavailable. Reopen this video from Spaces to retry." : "Internal server error" },
      { status: claimed ? 503 : 500 },
    );
  }
}
