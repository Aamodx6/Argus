import { moderationRequired } from "~/lib/guardrails";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ guarded: moderationRequired() }, {
    headers: { "Cache-Control": "no-store" },
  });
}
