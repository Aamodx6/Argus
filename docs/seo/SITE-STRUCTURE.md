# Site Structure & URL Hierarchy: Aspect Sentiment

```
https://nuance-xi.vercel.app/
│
├── /                                            # [P0] Public Homepage (Hero, Demo, Value Prop, Features Overview)
│
├── /features                                    # [P1] Product Capabilities Overview
│   ├── /features/trimodal-analysis              # Detailed Acoustic + Facial + Text Fusion
│   ├── /features/segment-sentiment              # Spoken Moment Granular Emotion Labeling
│   ├── /features/interactive-dashboard          # Timeline scrubbing & confidence distributions
│   └── /features/api                            # Async REST API & Webhooks
│
├── /solutions                                   # [P2] Industry & Use-Case Solutions
│   ├── /solutions/customer-experience           # Call centers & user interview sentiment
│   ├── /solutions/user-research                 # UX usability testing facial reaction tracking
│   └── /solutions/sales-coaching                # Sales rep pitch sentiment & confidence analysis
│
├── /pricing                                     # [P1] Transparent Tier Comparison (Free vs Pro vs Enterprise)
│
├── /compare                                     # [P1] High-Intent Competitor Comparison Hub
│   ├── /compare/aspect-sentiment-vs-assemblyai  # Multimodal vs Audio/Text Only
│   ├── /compare/aspect-sentiment-vs-hume-ai     # Developer-friendly Video Segment vs Complex EVI
│   └── /compare/aspect-sentiment-vs-symbl-ai    # Visual Emotion Recognition vs Voice Only
│
├── /docs                                        # [P1] Developer & Architecture Documentation
│   ├── /docs/quickstart                         # 5-minute video upload & sentiment tutorial
│   ├── /docs/models                             # MELD benchmark, Whisper ASR, facial landmark models
│   ├── /docs/aws-architecture                   # SageMaker async endpoints, S3 storage, Postgres
│   └── /docs/api-reference                      # Endpoints, payloads, and error codes
│
├── /blog                                        # [P2] Content Marketing & Topic Clusters
│   ├── /blog/multimodal-video-sentiment-guide
│   ├── /blog/speech-emotion-recognition-audio
│   ├── /blog/facial-landmark-sentiment-tracking
│   └── /blog/sagemaker-async-inference-tutorial
│
├── /company                                     # [P1] E-E-A-T & Trust Hub
│   ├── /about                                   # Team, mission, research background
│   ├── /security                                # AWS S3 encryption, SOC2 roadmap, data retention
│   ├── /privacy                                 # Biometric data handling & GDPR compliance
│   ├── /terms                                   # Terms of service
│   └── /contact                                 # Support & enterprise sales contact
│
├── /login                                       # Authentication Route
├── /signup                                      # User Registration
│
└── Private Authenticated App (Gated behind Auth Middleware):
    ├── /dashboard                               # Sentiment Analytics Dashboard
    ├── /upload                                  # Video File Upload & S3 Pre-signed URL Handler
    └── /analysis/[id]                           # Detailed Segment Timeline & Emotion Inspection
```
