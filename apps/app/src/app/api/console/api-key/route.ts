import { consoleApiKey, consoleUserId } from "~/server/console-jobs";

const headers = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  if (request.headers.get("x-argus-console") !== "1") {
    return Response.json({ error: "Open the Argus console to access your API key." }, { status: 403, headers });
  }

  try {
    const userId = await consoleUserId();
    if (!userId) {
      return Response.json({ error: "Sign in to access your API key." }, { status: 401, headers });
    }

    const apiKey = await consoleApiKey(userId);
    if (!apiKey) {
      return Response.json({ error: "This account has no API key." }, { status: 404, headers });
    }
    return Response.json({ apiKey }, { headers });
  } catch {
    return Response.json({ error: "Could not load your API key. Try again." }, { status: 503, headers });
  }
}
