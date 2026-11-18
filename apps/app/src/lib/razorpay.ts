import crypto from "node:crypto";
import Razorpay from "razorpay";

export const RAZORPAY_MIN_AMOUNT_PAISE = 100;

export const razorpayResponseHeaders = {
  "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function getRazorpayCredentials(): {
  keyId: string | undefined;
  keySecret: string | undefined;
} {
  const keyId = process.env.RAZORPAY_KEY_ID?.trim();
  const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();
  return {
    keyId: keyId && keyId.length > 0 ? keyId : undefined,
    keySecret: keySecret && keySecret.length > 0 ? keySecret : undefined,
  };
}

export function createRazorpayClient(): Razorpay | null {
  const { keyId, keySecret } = getRazorpayCredentials();
  if (!keyId || !keySecret) {
    return null;
  }
  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

export function generateReceipt(prefix = "rcpt"): string {
  const safePrefix = prefix.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 12) || "rcpt";
  const timestamp = Date.now().toString(36);
  const rand = crypto.randomBytes(4).toString("hex");
  return `${safePrefix}_${timestamp}_${rand}`.slice(0, 40);
}

export function computeRazorpaySignature(
  orderId: string,
  paymentId: string,
  keySecret: string,
): string {
  return crypto
    .createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");
}

export function verifyRazorpaySignature(params: {
  orderId: string;
  paymentId: string;
  signature: string;
  keySecret: string;
}): boolean {
  const { orderId, paymentId, signature, keySecret } = params;
  if (!orderId || !paymentId || !signature || !keySecret) {
    return false;
  }
  if (!/^[a-f0-9]{64}$/i.test(signature)) {
    return false;
  }
  const expected = computeRazorpaySignature(orderId, paymentId, keySecret);
  const expectedBuf = Buffer.from(expected, "hex");
  const actualBuf = Buffer.from(signature, "hex");
  if (expectedBuf.length !== actualBuf.length) {
    return false;
  }
  return crypto.timingSafeEqual(expectedBuf, actualBuf);
}

export function isRazorpayAuthError(error: unknown): boolean {
  if (!error || typeof error !== "object") {
    return false;
  }
  const record = error as {
    statusCode?: unknown;
    error?: { code?: unknown; description?: unknown };
  };
  if (record.statusCode === 401) {
    return true;
  }
  const desc =
    typeof record.error?.description === "string"
      ? record.error.description.toLowerCase()
      : "";
  return desc.includes("authentication failed");
}
