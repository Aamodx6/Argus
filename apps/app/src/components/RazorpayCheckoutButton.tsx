"use client";

import Script from "next/script";
import { useCallback, useState } from "react";
import { brand } from "~/lib/brand";

export interface RazorpaySuccessPayload {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayFailureEvent {
  error?: {
    code?: string;
    description?: string;
    reason?: string;
  };
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
  handler: (response: RazorpaySuccessPayload) => void | Promise<void>;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: "payment.failed", callback: (response: RazorpayFailureEvent) => void) => void;
}

type RazorpayConstructor = new (options: RazorpayOptions) => RazorpayInstance;

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor;
  }
}

interface CreateOrderResponse {
  order_id?: string;
  amount?: number;
  currency?: string;
  error?: string;
}

interface VerifyPaymentResponse {
  verified?: boolean;
  order_id?: string;
  payment_id?: string;
  error?: string;
}

export interface RazorpayCheckoutButtonProps {
  /** Order amount in paise (minimum 100 paise = ₹1). */
  amount: number;
  currency?: string;
  description: string;
  receipt?: string;
  label?: string;
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  onVerified?: (details: { orderId: string; paymentId: string }) => void;
  onError?: (message: string) => void;
  onDismiss?: () => void;
}

type CheckoutStatus =
  | { kind: "idle" }
  | { kind: "loading"; message: string }
  | { kind: "success"; message: string; orderId: string; paymentId: string }
  | { kind: "cancelled"; message: string }
  | { kind: "error"; message: string };

export function RazorpayCheckoutButton({
  amount,
  currency = "INR",
  description,
  receipt,
  label = "Pay with Razorpay",
  className,
  prefill,
  onVerified,
  onError,
  onDismiss,
}: RazorpayCheckoutButtonProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [status, setStatus] = useState<CheckoutStatus>({ kind: "idle" });

  const handleCheckout = useCallback(async () => {
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!keyId) {
      const msg = "Razorpay Key ID (NEXT_PUBLIC_RAZORPAY_KEY_ID) is not configured.";
      setStatus({ kind: "error", message: msg });
      onError?.(msg);
      return;
    }

    if (!Number.isInteger(amount) || amount < 100) {
      const msg = "Minimum payment amount is ₹1 (100 paise).";
      setStatus({ kind: "error", message: msg });
      onError?.(msg);
      return;
    }

    if (typeof window === "undefined" || typeof window.Razorpay !== "function") {
      const msg = "Razorpay Checkout is still loading. Please try again in a moment.";
      setStatus({ kind: "error", message: msg });
      onError?.(msg);
      return;
    }

    setStatus({ kind: "loading", message: "Creating order..." });

    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency,
          ...(receipt ? { receipt } : {}),
        }),
      });

      const orderData = (await orderRes.json()) as CreateOrderResponse;
      if (!orderRes.ok || !orderData.order_id || !orderData.amount || !orderData.currency) {
        throw new Error(orderData.error ?? "Unable to create Razorpay order.");
      }

      setStatus({ kind: "loading", message: "Opening Razorpay checkout..." });

      const rzp = new window.Razorpay({
        key: keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: brand.name,
        description,
        order_id: orderData.order_id,
        prefill,
        theme: { color: "#ff4b1f" },
        modal: {
          ondismiss: () => {
            const msg = "Payment cancelled by user.";
            setStatus({ kind: "cancelled", message: msg });
            onDismiss?.();
          },
        },
        handler: async (paymentResponse: RazorpaySuccessPayload) => {
          setStatus({ kind: "loading", message: "Verifying payment signature..." });
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
              }),
            });
            const verifyData = (await verifyRes.json()) as VerifyPaymentResponse;
            if (!verifyRes.ok || !verifyData.verified) {
              throw new Error(verifyData.error ?? "Payment signature verification failed.");
            }
            const verifiedOrderId = verifyData.order_id ?? paymentResponse.razorpay_order_id;
            const verifiedPaymentId = verifyData.payment_id ?? paymentResponse.razorpay_payment_id;
            setStatus({
              kind: "success",
              message: "Payment verified successfully.",
              orderId: verifiedOrderId,
              paymentId: verifiedPaymentId,
            });
            onVerified?.({ orderId: verifiedOrderId, paymentId: verifiedPaymentId });
          } catch (err) {
            const msg =
              err instanceof Error ? err.message : "Payment verification failed.";
            setStatus({ kind: "error", message: msg });
            onError?.(msg);
          }
        },
      });

      rzp.on("payment.failed", (failureEvent: RazorpayFailureEvent) => {
        const reason =
          failureEvent.error?.description ??
          failureEvent.error?.reason ??
          "Payment failed. Please try again.";
        setStatus({ kind: "error", message: reason });
        onError?.(reason);
      });

      rzp.open();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unable to start checkout.";
      setStatus({ kind: "error", message: msg });
      onError?.(msg);
    }
  }, [amount, currency, description, receipt, prefill, onVerified, onError, onDismiss]);

  const isLoading = status.kind === "loading";

  return (
    <div className="flex flex-col gap-2">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <button
        type="button"
        onClick={handleCheckout}
        disabled={isLoading}
        data-razorpay-ready={scriptLoaded ? "true" : "false"}
        className={
          className ??
          "inline-flex items-center justify-center rounded-full bg-[#ff4b1f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#e03f16] disabled:cursor-not-allowed disabled:opacity-60"
        }
      >
        {isLoading ? status.message : label}
      </button>

      {status.kind === "success" && (
        <p
          role="status"
          className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-900"
        >
          {status.message} Payment ID:{" "}
          <span className="font-mono">{status.paymentId}</span> · Order ID:{" "}
          <span className="font-mono">{status.orderId}</span>
        </p>
      )}
      {status.kind === "cancelled" && (
        <p
          role="status"
          className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900"
        >
          {status.message}
        </p>
      )}
      {status.kind === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800"
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
