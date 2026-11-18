import { NextResponse } from "next/server";
import { z } from "zod";
import {
  getRazorpayCredentials,
  razorpayResponseHeaders,
  verifyRazorpaySignature,
} from "~/lib/razorpay";

export const runtime = "nodejs";

const verifyPaymentSchema = z.object({
  razorpay_order_id: z.string().trim().min(1, "razorpay_order_id is required"),
  razorpay_payment_id: z.string().trim().min(1, "razorpay_payment_id is required"),
  razorpay_signature: z.string().trim().min(1, "razorpay_signature is required"),
});

export async function POST(req: Request) {
  const body: unknown = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { verified: false, error: "Invalid JSON request body" },
      { status: 400, headers: razorpayResponseHeaders },
    );
  }

  const parsed = verifyPaymentSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue =
      parsed.error.issues[0]?.message ?? "Missing required payment verification fields";
    return NextResponse.json(
      { verified: false, error: firstIssue },
      { status: 400, headers: razorpayResponseHeaders },
    );
  }

  const { keySecret } = getRazorpayCredentials();
  if (!keySecret) {
    return NextResponse.json(
      { verified: false, error: "Razorpay secret is not configured" },
      { status: 500, headers: razorpayResponseHeaders },
    );
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = parsed.data;

  const isValid = verifyRazorpaySignature({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
    keySecret,
  });

  if (!isValid) {
    return NextResponse.json(
      { verified: false, error: "Invalid payment signature" },
      { status: 400, headers: razorpayResponseHeaders },
    );
  }

  return NextResponse.json(
    {
      verified: true,
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
    },
    { status: 200, headers: razorpayResponseHeaders },
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: razorpayResponseHeaders });
}
