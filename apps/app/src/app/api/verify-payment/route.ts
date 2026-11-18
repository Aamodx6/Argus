import { z } from "zod";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import {
  checkoutPlans, checkoutJson, checkoutOwner, checkoutResponse, pricingCheckout, razorpayErrorStatus,
  razorpayTestClient, validPaymentSignature,
} from "~/server/razorpay";

const checkoutResult = z.object({
  razorpay_order_id: z.string().regex(/^order_[A-Za-z0-9]{1,64}$/),
  razorpay_payment_id: z.string().regex(/^pay_[A-Za-z0-9]{1,64}$/),
  razorpay_signature: z.string().regex(/^[a-f0-9]{64}$/i),
});

export async function POST(request: Request) {
  try {
    const userId = (await auth())?.user?.id;
    if (!userId) return checkoutResponse({ error: "Sign in to verify the payment." }, 401);

    const input = checkoutResult.safeParse(await checkoutJson(request));
    if (!input.success) return checkoutResponse({ error: "Payment verification fields are missing or invalid." }, 400);

    const razorpay = razorpayTestClient();
    if (!razorpay) return checkoutResponse({ error: "Payment verification is unavailable." }, 503);

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = input.data;
    const order = await razorpay.client.orders.fetch(razorpay_order_id);
    const plan = checkoutPlans.get(Number(order.amount));
    if (order.id !== razorpay_order_id || order.notes?.purpose !== pricingCheckout ||
        order.notes?.owner !== checkoutOwner(userId) || order.currency !== "INR" ||
        !plan ||
        !validPaymentSignature(order.id, razorpay_payment_id, razorpay_signature, razorpay.secret)) {
      return checkoutResponse({ error: "Payment signature could not be verified." }, 400);
    }
    const payment = await razorpay.client.payments.fetch(razorpay_payment_id);
    if (payment.order_id !== order.id || Number(payment.amount) !== Number(order.amount) || payment.currency !== "INR") {
      return checkoutResponse({ error: "The payment does not match the checkout order." }, 400);
    }
    if (payment.status === "authorized") {
      return checkoutResponse({ error: "Razorpay is still confirming the payment.", code: "PAYMENT_PENDING" }, 409);
    }
    if (payment.status !== "captured") {
      return checkoutResponse({ error: "Razorpay did not capture this payment." }, 400);
    }
    await db.planPurchase.createMany({
      data: { orderId: order.id, userId, plan },
      skipDuplicates: true,
    });
    return checkoutResponse({ success: true });
  } catch (error) {
    const status = razorpayErrorStatus(error);
    if (status === 400 || status === 404) return checkoutResponse({ error: "Invalid checkout order." }, 400);
    console.error("Razorpay payment verification failed", { status });
    return checkoutResponse({ error: "Could not verify the payment. Try again." }, 500);
  }
}
