export const brand = {
  name: "Argus",
  initials: "AR",
  description: "Multimodal Video Sentiment and Emotion AI.",
} as const;

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export const marketingHome = siteOrigin ?? "/";
export const marketingContact = siteOrigin ? `${siteOrigin}/contact` : "/signup";
