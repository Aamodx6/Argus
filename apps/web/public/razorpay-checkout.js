(function () {
  const CHECKOUT_SCRIPT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

  const PLAN_CATALOG = {
    starter: {
      amount: 299900,
      currency: "INR",
      description: "Argus Starter Plan (300 video minutes / month)",
    },
    professional: {
      amount: 1349900,
      currency: "INR",
      description: "Argus Professional Plan (1,500 video minutes / month)",
    },
    business: {
      amount: 4799900,
      currency: "INR",
      description: "Argus Business Plan (6,000 video minutes / month)",
    },
  };

  function getApiUrl(path) {
    if (typeof window.nuanceApiUrl === "function") {
      return window.nuanceApiUrl(path);
    }
    return path;
  }

  function getRazorpayKeyId() {
    return window.nuanceConfig?.razorpayKeyId || "";
  }

  function getPrefill() {
    try {
      const raw = localStorage.getItem("argus_user") || localStorage.getItem("nuance_user");
      if (!raw) return undefined;
      const user = JSON.parse(raw);
      const prefill = {};
      if (user?.name) prefill.name = user.name;
      if (user?.email) prefill.email = user.email;
      return Object.keys(prefill).length ? prefill : undefined;
    } catch {
      return undefined;
    }
  }

  function showToast(kind, title, detail) {
    let container = document.getElementById("argus-razorpay-toast");
    if (!container) {
      container = document.createElement("div");
      container.id = "argus-razorpay-toast";
      container.setAttribute("role", kind === "error" ? "alert" : "status");
      container.setAttribute("aria-live", "polite");
      container.style.cssText = [
        "position:fixed",
        "right:20px",
        "bottom:20px",
        "z-index:99999",
        "max-width:400px",
        "padding:14px 16px",
        "border-radius:14px",
        "font-family:Inter,system-ui,sans-serif",
        "font-size:13px",
        "line-height:1.45",
        "box-shadow:0 16px 40px -12px rgba(17,19,23,0.35)",
        "display:flex",
        "flex-direction:column",
        "gap:4px",
        "transition:opacity 0.2s ease",
      ].join(";");
      document.body.appendChild(container);
    }

    const palette = {
      info: { bg: "#111317", color: "#f4f3ef", border: "#2a2d33" },
      success: { bg: "#ecfdf5", color: "#065f46", border: "#a7f3d0" },
      warning: { bg: "#fffbeb", color: "#92400e", border: "#fde68a" },
      error: { bg: "#fef2f2", color: "#991b1b", border: "#fecaca" },
    }[kind] || { bg: "#111317", color: "#f4f3ef", border: "#2a2d33" };

    container.style.background = palette.bg;
    container.style.color = palette.color;
    container.style.border = `1px solid ${palette.border}`;
    container.setAttribute("role", kind === "error" ? "alert" : "status");
    container.innerHTML = "";

    const header = document.createElement("div");
    header.style.cssText = "display:flex;justify-content:space-between;align-items:center;gap:12px;font-weight:600;";
    const titleSpan = document.createElement("span");
    titleSpan.textContent = title;
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.textContent = "×";
    closeBtn.setAttribute("aria-label", "Dismiss notification");
    closeBtn.style.cssText = "all:unset;cursor:pointer;font-size:18px;line-height:1;opacity:0.7;";
    closeBtn.onclick = () => container.remove();
    header.appendChild(titleSpan);
    header.appendChild(closeBtn);
    container.appendChild(header);

    if (detail) {
      const body = document.createElement("div");
      body.style.cssText = "opacity:0.9;word-break:break-word;";
      body.textContent = detail;
      container.appendChild(body);
    }
  }

  function ensureRazorpayLoaded() {
    if (typeof window.Razorpay === "function") {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${CHECKOUT_SCRIPT_SRC}"]`);
      if (existing) {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener(
          "error",
          () => reject(new Error("Failed to load Razorpay Checkout script.")),
          { once: true },
        );
        return;
      }
      const script = document.createElement("script");
      script.src = CHECKOUT_SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Razorpay Checkout script."));
      document.head.appendChild(script);
    });
  }

  async function openCheckout({
    amount,
    currency = "INR",
    description = "Argus Plan",
    receipt,
    onSuccess,
    onError,
    onDismiss,
  }) {
    const keyId = getRazorpayKeyId();
    if (!keyId) {
      const msg = "Razorpay Key ID is not configured (set PUBLIC_RAZORPAY_KEY_ID).";
      showToast("error", "Checkout unavailable", msg);
      onError?.(msg);
      return;
    }

    const numericAmount = Number(amount);
    if (!Number.isInteger(numericAmount) || numericAmount < 100) {
      const msg = "Minimum payment amount is ₹1 (100 paise).";
      showToast("error", "Invalid amount", msg);
      onError?.(msg);
      return;
    }

    showToast("info", "Starting checkout", "Creating Razorpay order…");

    try {
      await ensureRazorpayLoaded();

      const createRes = await fetch(getApiUrl("/api/create-order"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: numericAmount,
          currency,
          ...(receipt ? { receipt } : {}),
        }),
      });

      const order = await createRes.json().catch(() => ({}));
      if (!createRes.ok || !order.order_id || !order.amount || !order.currency) {
        throw new Error(order.error || "Unable to create Razorpay order.");
      }

      const rzp = new window.Razorpay({
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Argus",
        description,
        order_id: order.order_id,
        prefill: getPrefill(),
        theme: { color: "#ff4b1f" },
        modal: {
          ondismiss: function () {
            showToast("warning", "Payment cancelled", "You closed the Razorpay checkout modal.");
            onDismiss?.();
          },
        },
        handler: async function (response) {
          showToast("info", "Verifying payment", "Validating Razorpay payment signature…");
          try {
            const verifyRes = await fetch(getApiUrl("/api/verify-payment"), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verified = await verifyRes.json().catch(() => ({}));
            if (!verifyRes.ok || !verified.verified) {
              throw new Error(verified.error || "Payment signature verification failed.");
            }
            showToast(
              "success",
              "Payment verified",
              `Payment ${verified.payment_id} confirmed for order ${verified.order_id}.`,
            );
            onSuccess?.(verified);
          } catch (err) {
            const msg = err?.message || "Payment verification failed.";
            showToast("error", "Verification failed", msg);
            onError?.(msg);
          }
        },
      });

      rzp.on("payment.failed", function (failureEvent) {
        const msg =
          failureEvent?.error?.description ||
          failureEvent?.error?.reason ||
          "Payment failed. Please try again.";
        showToast("error", "Payment failed", msg);
        onError?.(msg);
      });

      rzp.open();
    } catch (err) {
      const msg = err?.message || "Could not start Razorpay checkout.";
      showToast("error", "Checkout error", msg);
      onError?.(msg);
    }
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target?.closest?.(
      'a[href^="#checkout-"], [data-razorpay-checkout]',
    );
    if (!trigger) return;

    event.preventDefault();

    const href = trigger.getAttribute("href") || "";
    if (href.startsWith("#checkout-")) {
      const planId = href.slice("#checkout-".length);
      const plan = PLAN_CATALOG[planId];
      if (!plan) return;
      openCheckout({
        amount: plan.amount,
        currency: plan.currency,
        description: plan.description,
      });
      return;
    }

    const amount = Number(trigger.getAttribute("data-amount"));
    const currency = trigger.getAttribute("data-currency") || "INR";
    const description = trigger.getAttribute("data-description") || "Argus Plan";
    openCheckout({ amount, currency, description });
  });

  window.argusCheckout = { openCheckout, PLAN_CATALOG };
})();
