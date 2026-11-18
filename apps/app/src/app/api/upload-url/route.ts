import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";
import { env } from "~/env";
import { db } from "~/server/db";
import { moderationRequired } from "~/lib/guardrails";

export async function POST(req: Request) {
  if (moderationRequired()) {
    return NextResponse.json({ error: "Use guarded uploads", code: "MODERATED_UPLOAD_REQUIRED" }, { status: 403 });
  }
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

    const { fileType, size } = (await req.json()) as { fileType?: unknown; size?: unknown };

    if (typeof fileType !== "string" || !/^\.(mp4|mov|avi)$/i.test(fileType)) {
      return NextResponse.json(
        { error: "Invalid file type. Only .mp4, .mov, .avi are supported" },
        { status: 400 },
      );
    }
    if (workspace && (typeof size !== "number" || !Number.isInteger(size) || size < 1 || size > 128 * 1024 * 1024)) {
      return NextResponse.json({ error: "Choose a video up to 128 MiB." }, { status: 400 });
    }

    // Generate upload url
    const s3Client = new S3Client({
      region: env.AWS_REGION,
    });

    const id = crypto.randomUUID();
    const extension = fileType.toLowerCase();
    const key = `${env.AWS_INFERENCE_INPUT_PREFIX}${id}${extension}`;
    const contentType = {
      ".mp4": "video/mp4",
      ".mov": "video/quicktime",
      ".avi": "video/x-msvideo",
    }[extension]!;

    const command = new PutObjectCommand({
      Bucket: env.AWS_INFERENCE_BUCKET,
      Key: key,
      ContentType: contentType,
      ...(workspace && { ContentLength: size as number }),
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    const video = await db.videoFile.create({
      data: {
        key: key,
        userId: quota.userId,
        analyzed: false,
      },
    });

    return NextResponse.json({
      url,
      fileId: id,
      fileType,
      contentType,
      key,
      ...(workspace && { analysisId: video.id }),
    });
  } catch (error) {
    console.error("Video upload URL creation failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
