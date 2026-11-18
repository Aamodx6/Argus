import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import Razorpay from "razorpay";
import type { PlanTier } from "@prisma/client";

// Pricing advertises access that is still planned. Only test orders are supported.
export const pricingCheckout = "argus-pricing";
export const checkoutPlans = new Map<number, PlanTier>([
  [299900, "STARTER"],
  [1349900, "PROFESSIONAL"],
  [4799900, "BUSINESS"],
]);

export function razorpayTestClient() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId?.startsWith("rzp_test_") || !secret) return null;
  return { keyId, secret, client: new Razorpay({ key_id: keyId, key_secret: secret }) };
}

export function checkoutOwner(userId: string) {
  return createHash("sha256").update(userId).digest("hex");
}

export function validPaymentSignature(orderId: string, paymentId: string, signature: string, secret: string) {
  if (!/^[a-f0-9]{64}$/i.test(signature)) return false;
  const expected = createHmac("sha256", secret).update(`${orderId}|${paymentId}`).digest();
  return timingSafeEqual(expected, Buffer.from(signature, "hex"));
}

export function checkoutResponse(body: object, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export function checkoutJson(request: Request): Promise<unknown> {
  if (request.headers.get("content-type")?.split(";")[0]?.trim().toLowerCase() !== "application/json") {
    return Promise.resolve(null);
  }
  return request.json().catch(() => null);
}

export function razorpayErrorStatus(error: unknown) {
  return error && typeof error === "object" && "statusCode" in error ? error.statusCode : undefined;
}
