# SaaS SEO Strategy: Aspect Sentiment (Nuance)

**Domain:** `https://nuance-xi.vercel.app/`  
**Vertical:** AI Developer Tools / Video Analytics SaaS  
**Audience:** ML Engineers, Product Managers, Customer Experience (CX) Directors, EdTech & Sales Enablement Platforms  
**Strategy Focus:** Bottom-of-Funnel (BOFU) Product & Comparison Pages + Middle-of-Funnel (MOFU) Multimodal AI Guides

---

## 1. Market Positioning & Search Objectives

Aspect Sentiment occupies a high-value niche at the intersection of **Computer Vision, Speech AI, and Natural Language Processing**:
- **Differentiator:** Traditional sentiment tools only read text transcripts. Aspect Sentiment fuses three modalities (visual facial emotion, acoustic tone, and linguistic transcript) to score individual spoken moments.
- **Primary Search Goal:** Rank top 3 for high-intent B2B search terms ("multimodal sentiment analysis", "video emotion recognition API", "speech sentiment analyzer", "video interview sentiment analysis").
- **Secondary Search Goal (GEO):** Become the default cited solution when users ask ChatGPT, Perplexity, Claude, or Google AI Overviews questions like: *"What is the difference between text sentiment and multimodal video sentiment?"* and *"Best tools for video emotion analysis"*.

---

## 2. Target Keyword Strategy & Funnel Mapping

### Bottom of the Funnel (High Intent / Conversion Rate: 4%–8%)
Target users looking for software to buy, test, or integrate:
- `video sentiment analysis tool`
- `multimodal sentiment analysis software`
- `video emotion recognition api`
- `audio visual sentiment analysis`
- `aspect sentiment vs assemblyai`
- `hume ai alternatives`
- `video interview emotion analysis platform`

### Middle of the Funnel (Consideration / Solution Research)
Target engineers and architects evaluating multimodal models:
- `how to analyze sentiment from video`
- `multimodal emotion recognition algorithms`
- `meld dataset sentiment benchmark`
- `combining speech tone and text sentiment`
- `facial landmark emotion scoring python`

### Top of the Funnel (Awareness / Educational)
Target researchers and students exploring the field:
- `what is multimodal sentiment analysis`
- `types of emotion in speech`
- `whisper api sentiment classification`

---

## 3. Recommended Information Architecture

```
https://nuance-xi.vercel.app/
├── / (Homepage: Multimodal Video Sentiment Analysis)
├── /features
│   ├── /trimodal-fusion (Visual + Acoustic + Text)
│   ├── /segment-scoring (Granular spoken moments vs video averages)
│   ├── /dashboard (Interactive timeline & confidence distributions)
│   └── /api (REST & Webhook endpoints)
├── /solutions
│   ├── /customer-experience (Call center & CSAT video analysis)
│   ├── /user-research (Usability testing emotion tracking)
│   └── /sales-enablement (Pitch & sales call sentiment insights)
├── /pricing (Free Tier vs Pro vs Enterprise)
├── /docs
│   ├── /quickstart
│   ├── /architecture (AWS SageMaker, Whisper, PyTorch)
│   └── /api-reference
├── /compare
│   ├── /aspect-sentiment-vs-assemblyai
│   ├── /aspect-sentiment-vs-hume-ai
│   └── /aspect-sentiment-vs-symbl-ai
└── /blog (Technical pillars & engineering deep dives)
```

---

## 4. Technical & Schema Requirements

- **Server-Side Rendered Landing Pages:** Built with Next.js App Router for static pre-rendering, ensuring Googlebot indexes full copy without client JS execution lag.
- **Structured Data:** Full `SoftwareApplication`, `Organization`, and `WebSite` JSON-LD on all marketing pages.
- **LLM Ingestion Ready:** Maintained `llms.txt` and `llms-full.txt` updated with every release.
- **Conversion Tracking:** Event tracking for "Demo Played", "Sample Video Analyzed", "Signup Click", and "API Key Generated".
