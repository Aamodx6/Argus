import { RazorpayCheckoutButton } from "~/components/RazorpayCheckoutButton";
import { brand } from "~/lib/brand";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    inr: 2999,
    amountPaise: 299900,
    minutes: "300 video minutes / month",
    blurb: "For teams that analyze smaller batches of video.",
    featured: false,
  },
  {
    id: "professional",
    name: "Professional",
    inr: 13499,
    amountPaise: 1349900,
    minutes: "1,500 video minutes / month",
    blurb: "For teams processing video regularly.",
    featured: true,
  },
  {
    id: "business",
    name: "Business",
    inr: 47999,
    amountPaise: 4799900,
    minutes: "6,000 video minutes / month",
    blurb: "For teams with higher recurring video volume.",
    featured: false,
  },
] as const;

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf9] px-6 py-16 text-[#111317]">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ff4b1f]">
            {brand.name} Billing · Razorpay Standard Checkout
          </span>
          <h1 className="text-4xl font-semibold tracking-tight">
            Choose a plan in INR
          </h1>
          <p className="max-w-2xl text-sm text-[#4b505a]">
            Payments are processed via Razorpay Standard Web Checkout with server-side
            order creation and HMAC-SHA256 signature verification.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between gap-6 rounded-3xl border p-7 ${
                plan.featured
                  ? "border-[#111317] bg-[#111317] text-[#f4f3ef]"
                  : "border-[#e6e4dc] bg-white text-[#111317]"
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{plan.name}</h2>
                  {plan.featured && (
                    <span className="rounded-full bg-[#ff4b1f] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-4xl font-semibold tracking-tight">
                  ₹{plan.inr.toLocaleString("en-IN")}
                  <span className="ml-1 text-sm font-normal opacity-60">/ month</span>
                </p>
                <p className="text-sm opacity-75">{plan.blurb}</p>
                <p className="font-mono text-xs uppercase tracking-wider opacity-70">
                  {plan.minutes}
                </p>
              </div>

              <RazorpayCheckoutButton
                amount={plan.amountPaise}
                currency="INR"
                description={`${brand.name} ${plan.name} Plan (${plan.minutes})`}
                label={`Pay ₹${plan.inr.toLocaleString("en-IN")}`}
                className={
                  plan.featured
                    ? "inline-flex w-full items-center justify-center rounded-full bg-[#ff4b1f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#e03f16] disabled:cursor-not-allowed disabled:opacity-60"
                    : "inline-flex w-full items-center justify-center rounded-full bg-[#111317] px-5 py-3 text-sm font-medium text-[#f4f3ef] transition hover:bg-[#2a2d33] disabled:cursor-not-allowed disabled:opacity-60"
                }
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
