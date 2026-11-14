export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    docs: string;
    app: string;
  };
  navigation: {
    title: string;
    href: string;
  }[];
  model: {
    region: string;
    endpoint: string;
    version: string;
    latencyMs: number;
    maxFileSizeMiB: number;
  };
}

export const siteConfig: SiteConfig = {
  name: "Nuance",
  title: "Nuance · Multimodal Video Sentiment AI",
  description: "Multimodal video sentiment and emotion inference pipeline powered by AWS SageMaker.",
  url: "http://localhost:4321",
  ogImage: "/framerusercontent.com/images/AzoEBccU7RxmbToH4vGy9YeIEAA.jpg",
  links: {
    github: "https://github.com/nuance-ai/nuance",
    docs: "/docs",
    app: "http://localhost:3000",
  },
  navigation: [
    { title: "Product", href: "/product" },
    { title: "Pricing", href: "/pricing" },
    { title: "Contact", href: "/contact" },
    { title: "Console", href: "/console" },
  ],
  model: {
    region: "ap-southeast-2",
    endpoint: "sagemaker-multimodal-sentiment-v2",
    version: "2.4.0",
    latencyMs: 180,
    maxFileSizeMiB: 128,
  },
};
