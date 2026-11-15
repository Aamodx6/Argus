import { env } from "~/env";


export function checkNeonRealtimeConfig() {
  if (!env.NEON_REALTIME_URL || !env.NEON_REALTIME_SECRET) {
    return { status: "unconfigured", error: "Neon Realtime env vars missing" };
  }

  return {
    status: "configured",
    url: env.NEON_REALTIME_URL,
    hasSecret: !!env.NEON_REALTIME_SECRET,
  };
}
