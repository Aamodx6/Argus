import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { guardedSubject } from "~/lib/guardrails";
import { consoleUserId, findJob, guardedJobId, legacyJobId } from "~/server/console-jobs";
import { db } from "~/server/db";

async function ownedVideo(userId: string, id: string) {
  if (guardedJobId.safeParse(id).success) {
    const job = await findJob(userId, id);
    if (job?.status !== "SUCCEEDED") return null;
    const subject = guardedSubject(userId);
    return {
      bucket: process.env.AWS_JOBS_VIDEOS_BUCKET,
      key: `uploads/${subject}/${subject}/${id}.mp4`,
      type: "video/mp4",
    };
  }
  if (!legacyJobId.safeParse(id).success) return null;
  const video = await db.videoFile.findUnique({ where: { id, userId }, select: { key: true } });
  if (!video) return null;
  return { bucket: process.env.AWS_INFERENCE_BUCKET, key: video.key };
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = await consoleUserId();
  const headers = { "Cache-Control": "private, no-store" };
  if (!userId) return Response.json({ error: "Sign in to play the video." }, { status: 401, headers });
  try {
    const video = await ownedVideo(userId, (await params).id);
    if (!video) return Response.json({ error: "Video preview unavailable." }, { status: 404, headers });
    if (!video.bucket) return Response.json({ error: "Video playback is not configured." }, { status: 503, headers });
    const client = new S3Client({ region: process.env.AWS_REGION ?? "ap-southeast-2" });
    const location = await getSignedUrl(client, new GetObjectCommand({
      Bucket: video.bucket, Key: video.key, ResponseContentType: video.type,
    }), { expiresIn: 900 });
    return new Response(null, { status: 307, headers: { ...headers, Location: location } });
  } catch {
    return Response.json({ error: "Video playback is temporarily unavailable." }, { status: 503, headers });
  }
}
