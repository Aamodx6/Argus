import { NextResponse } from "next/server";
import { z } from "zod";
import {
  RAZORPAY_MIN_AMOUNT_PAISE,
  createRazorpayClient,
  generateReceipt,
  isRazorpayAuthError,
  razorpayResponseHeaders,
} from "~/lib/razorpay";

export const runtime = "nodejs";

const createOrderSchema = z.object({
  amount: z
    .number({
      required_error: "Amount (in paise) is required",
      invalid_type_error: "Amount must be a number in paise",
    })
    .int("Amount must be an integer in paise")
    .min(
      RAZORPAY_MIN_AMOUNT_PAISE,
      `Minimum order amount is ${RAZORPAY_MIN_AMOUNT_PAISE} paise`,
    ),
  currency: z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z]{3}$/, "Currency must be a 3-letter ISO code")
    .default("INR"),
  receipt: z
    .string()
    .trim()
    .min(1)
    .max(40, "Receipt must be 40 characters or fewer")
    .optional(),
  notes: z.record(z.string(), z.string()).optional(),
});

export async function POST(req: Request) {
  const body: unknown = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Invalid JSON request body" },
      { status: 400, headers: razorpayResponseHeaders },
    );
  }

  const parsed = createOrderSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Invalid order request";
    return NextResponse.json(
      { error: firstIssue },
      { status: 400, headers: razorpayResponseHeaders },
    );
  }

  const client = createRazorpayClient();
  if (!client) {
    return NextResponse.json(
      { error: "Razorpay credentials are not configured" },
      { status: 401, headers: razorpayResponseHeaders },
    );
  }

  const { amount, currency, receipt, notes } = parsed.data;

  try {
    const order = await client.orders.create({
      amount,
      currency,
      receipt: receipt ?? generateReceipt("argus"),
      ...(notes ? { notes } : {}),
    });

    return NextResponse.json(
      {
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
      { status: 200, headers: razorpayResponseHeaders },
    );
  } catch (error) {
    if (isRazorpayAuthError(error)) {
      return NextResponse.json(
        { error: "Razorpay authentication failed" },
        { status: 401, headers: razorpayResponseHeaders },
      );
    }
    console.error("Razorpay order creation failed");
    return NextResponse.json(
      { error: "Failed to create Razorpay order" },
      { status: 500, headers: razorpayResponseHeaders },
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: razorpayResponseHeaders });
}
