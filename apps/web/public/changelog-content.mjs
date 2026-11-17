export const milestones = [
  {
    id: "video-minute-pricing",
    date: "2026-11-17",
    category: "Pricing",
    title: "API pricing by video minute",
    summary: "Published the proposed INR pricing for Starter, Professional, and Business, with a pay-as-you-go rate of ₹12 per processed video minute.",
    details: "Paid plans, minute-based billing, and trial credits are planned.",
  },
  {
    id: "live-video-analysis",
    date: "2026-11-14",
    category: "Inference",
    title: "Video upload and analysis verified end to end",
    summary: "A signed-in test user uploaded a short video to S3 and received timestamped sentiment and emotion predictions from the Sydney SageMaker endpoint.",
    details: "The test used one request from the user's quota. The team also resolved container startup and multichannel audio issues.",
  },
  {
    id: "meld-training",
    date: "2026-11-10",
    category: "Model training",
    title: "Multimodal model trained on MELD",
    summary: "Completed GPU training on SageMaker using labeled video, audio, and transcripts. The team tracked training and validation in TensorBoard and saved a checkpoint to S3.",
    details: "The offline MELD test run reported 66.17% sentiment accuracy and 47.70% emotion accuracy.",
  },
];

export const serviceStatus = {
  current: "Live inference is offline. The saved model and endpoint configuration can be redeployed without retraining.",
  inDevelopment: [
    "Verify that public uploads pass moderation before analysis begins.",
    "Queue longer videos and let users check when their results are ready.",
    "Evaluate the deployed model on silent, noisy, and multi-speaker clips.",
    "Connect live drift monitoring and track accuracy from user corrections.",
    "Meter usage by video minute and enforce plan limits and trial eligibility.",
    "Measure latency and cost per processed minute under realistic traffic.",
  ],
};
