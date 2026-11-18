import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { Hash } from "@smithy/hash-node";
import { SignatureV4 } from "@smithy/signature-v4";
import { NextResponse } from "next/server";
import { registerGuardedKey } from "~/lib/guardrails";

type Context = { params: Promise<{ operation?: string[] }> };

async function proxy(request: Request, context: Context) {
  const root = process.env.AWS_JOBS_API_URL;
  const { operation = [] } = await context.params;
  const [name, id] = operation;
  const submit = request.method === "POST" && operation.length === 1 &&
    (name === "uploads" || name === "jobs");
  const status = request.method === "GET" && operation.length === 2 &&
    name === "jobs" && !!id && /^[a-f0-9]{32}$/.test(id);
  const quota = request.method === "GET" && operation.length === 1 && name === "quota";
  if (!submit && !status && !quota) {
    return NextResponse.json({ error: "Unknown inference operation" }, { status: 404 });
  }
  const consoleRequest = request.headers.get("x-argus-console") === "1";
  const workspace = consoleRequest ? await import("~/server/console-jobs") : null;
  try {
    const userId = await workspace?.consoleUserId();
    if (workspace && !userId) {
      return NextResponse.json({ error: "Sign in to access video analysis." }, { status: 401 });
    }
    if (workspace && userId && status) {
      const job = await workspace.findJob(userId, id);
      if (!job) return NextResponse.json({ error: "Job not found" }, { status: 404 });
      if (job.status === "SUCCEEDED" && job.analysis) {
        return NextResponse.json({ status: job.status, analysis: job.analysis }, {
          headers: { "Cache-Control": "no-store" },
        });
      }
    }
    const token = workspace && userId
      ? await workspace.consoleApiKey(userId)
      : request.headers.get("authorization")?.match(/^Bearer ([A-Za-z0-9_-]{32,128})$/i)?.[1];
    if (!token) {
      return NextResponse.json({ error: workspace ? "This account has no analysis quota." : "API key required" }, {
        status: workspace ? 403 : 401,
      });
    }
    if (!root || (workspace && !process.env.AWS_API_KEYS_TABLE)) {
      return NextResponse.json({ error: "Async inference is not configured" }, { status: 503 });
    }
    const url = new URL(operation.join("/"), root.replace(/\/?$/, "/"));
    let body = submit ? await request.text() : undefined;
    if (body && body.length > 4096) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }
    const signer = new SignatureV4({
      credentials: defaultProvider(),
      region: process.env.AWS_REGION ?? "ap-southeast-2",
      service: "execute-api",
      sha256: Hash.bind(null, "sha256"),
    });
    if (!(await registerGuardedKey(token))) {
      return NextResponse.json({ error: "Invalid API key", code: "INVALID_API_KEY" }, { status: 401 });
    }
    let consoleJobId = status ? id : undefined;
    if (workspace && userId && submit && name === "jobs") {
      let input: unknown;
      try { input = JSON.parse(body ?? ""); } catch {}
      const job = await workspace.prepareJob(userId, input);
      if (!job) return NextResponse.json({ error: "Invalid upload details" }, { status: 400 });
      consoleJobId = job.id;
      if (job.status !== "AWAITING_SUBMISSION") return NextResponse.json({ job_id: job.id }, { status: 202 });
      body = JSON.stringify({ upload_id: job.id });
    }
    const signed = await signer.sign({
      method: request.method,
      protocol: url.protocol,
      hostname: url.hostname,
      path: url.pathname,
      headers: { host: url.host, "content-type": "application/json", "x-aspect-api-key": token },
      body,
    });
    const response = await fetch(url, {
      method: request.method, headers: signed.headers, body, cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });
    if (workspace && userId && consoleJobId) {
      await workspace.recordJobResponse(userId, consoleJobId, status, response.clone());
    }
    return new Response(response.body, {
      status: response.status,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Async inference request failed", error instanceof Error ? error.name : "unknown");
    return NextResponse.json({ error: "Async inference service unavailable" }, { status: 503 });
  }
}

export const GET = proxy;
export const POST = proxy;
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-aspect-api-key",
    },
  });
}
