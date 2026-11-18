export const monthlyPlans = [
  {
    id: "starter", name: "Starter", monthly: 2999, perMinute: 10,
    blurb: "For teams that analyze smaller batches of video.",
    threads: "300 video minutes", picks: "Monthly allowance",
    features: "Video, audio and text analysis|Timestamped sentiment and emotion|Unused minutes expire monthly|Extra usage billed separately",
    cta: "Get Starter · ₹2,999 / mo", href: "/signup",
  },
  {
    id: "professional", name: "Professional", monthly: 13499, perMinute: 9, featured: true,
    blurb: "For teams processing video regularly.",
    threads: "1,500 video minutes", picks: "Monthly allowance",
    features: "Video, audio and text analysis|Timestamped sentiment and emotion|Unused minutes expire monthly|Extra usage billed separately",
    cta: "Get Professional · ₹13,499 / mo", href: "/signup",
  },
  {
    id: "business", name: "Business", monthly: 47999, perMinute: 8,
    blurb: "For teams with higher recurring video volume.",
    threads: "6,000 video minutes", picks: "Monthly allowance",
    features: "Video, audio and text analysis|Timestamped sentiment and emotion|Unused minutes expire monthly|Extra usage billed separately",
    cta: "Get Business · ₹47,999 / mo", href: "/contact",
  },
];

export const comparison = [
  ["Plan", "Starter", "Professional", "Business"],
  ["Monthly price", "₹2,999", "₹13,499", "₹47,999"],
  ["Video minutes per month", "300", "1,500", "6,000"],
  ["Approx. rate per included minute", "₹10", "₹9", "₹8"],
  ["Video, audio and text analysis", "Included", "Included", "Included"],
  ["Timestamped sentiment", "Included", "Included", "Included"],
  ["Timestamped emotion", "Included", "Included", "Included"],
  ["Unused minutes roll over", "No", "No", "No"],
  ["Additional minutes", "Billed separately", "Billed separately", "Billed separately"],
  ["Currency", "INR", "INR", "INR"],
  ["Availability", "Planned", "Planned", "Planned"],
];

export const pricingFaq = [
  {
    q: "Can I pay as I go?",
    a: "The planned pay-as-you-go rate is ₹12 per processed video minute, with no monthly commitment.",
  },
  {
    q: "Do you offer free trial credits?",
    a: "The planned trial includes 10 video minutes for a verified account. Qualified businesses can request 30 minutes, and enterprise prospects can receive 100 minutes after review. Trials are one-time and subject to rate limits.",
  },
  {
    q: "What happens if I use all my included minutes?",
    a: "Additional usage will be billed separately. Overage rates will be published before billing opens.",
  },
  {
    q: "Do unused minutes roll over?",
    a: "Unused minutes expire at the end of each billing month.",
  },
  {
    q: "How does Enterprise pricing work?",
    a: "Enterprise pricing is custom and based on committed usage. Dedicated infrastructure is priced separately.",
  },
  {
    q: "Can I start using these plans now?",
    a: "Paid plans and trial credits are not active yet. You can view a saved analysis in the console.",
  },
];
