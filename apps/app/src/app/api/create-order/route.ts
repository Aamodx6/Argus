import { z } from "zod";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import {
  checkoutPlans, checkoutJson, checkoutOwner, checkoutResponse, pricingCheckout, razorpayErrorStatus, razorpayTestClient,
} from "~/server/razorpay";

const orderInput = z.object({
  amount: z.number().int().min(100).refine(amount => checkoutPlans.has(amount)),
  currency: z.literal("INR"),
  receipt: z.string().regex(/^[A-Za-z0-9_-]{1,40}$/),
});

export async function POST(request: Request) {
  try {
    const userId = (await auth())?.user?.id;
    if (!userId) return checkoutResponse({ error: "Sign in to continue to checkout." }, 401);

    const input = orderInput.safeParse(await checkoutJson(request));
    if (!input.success) return checkoutResponse({ error: "Choose a valid INR plan and receipt." }, 400);

    const razorpay = razorpayTestClient();
    if (!razorpay) return checkoutResponse({ error: "Test checkout is unavailable." }, 503);
    try {
      await db.planPurchase.findFirst({ where: { userId }, select: { orderId: true } });
    } catch {
      return checkoutResponse({ error: "Account plan storage is unavailable. Try again later." }, 503);
    }
    const order = await razorpay.client.orders.create({
      ...input.data,
      notes: { purpose: pricingCheckout, owner: checkoutOwner(userId) },
    });
    return checkoutResponse({
      order_id: order.id, amount: order.amount, currency: order.currency, key_id: razorpay.keyId,
    });
  } catch (error) {
    const status = razorpayErrorStatus(error);
    console.error("Razorpay order creation failed", { status });
    return checkoutResponse({ error: "Could not create the checkout order. Try again." }, 500);
  }
}
