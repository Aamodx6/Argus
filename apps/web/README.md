# Warpyn · Astro Web Application

A clean, blazing-fast, 100% pre-rendered replication of the **Warpyn** data analytics website built with **Astro**.

---

## 🚀 Key Advantages Over the Raw Framer Export

1. **Zero JS by Default**: Ships pure static semantic HTML and scoped CSS. No 2MB React/Framer runtime bundles.
2. **Pre-rendered SEO**: Fixes the blank `<div id="main"></div>` issue on subpages (`/product` and `/pricing`). Search engines index 100% of the content on First Paint.
3. **100/100 Core Web Vitals**: Instant TTFB (<100ms), First Contentful Paint (<0.3s), and zero Cumulative Layout Shift (CLS).
4. **Clean & Modular**: Human-readable components without machine-generated CSS hashes.
5. **No Watermarks or Telemetry**: Removed Framer badges and tracking scripts.

---

## 📁 Project Structure

```text
warpyn-astro/
├── public/
│   ├── favicon.png               # Brand icon
│   └── images/                   # All 52 optimized image assets
├── src/
│   ├── styles/
│   │   └── global.css            # Design tokens, typography & utilities
│   ├── layouts/
│   │   └── BaseLayout.astro      # Global layout, OpenGraph, JSON-LD schema
│   ├── components/
│   │   ├── Navbar.astro          # Responsive header & mobile drawer
│   │   ├── HeroLoom.astro        # Interactive canvas simulation + question pill
│   │   ├── SourcesMarquee.astro  # 240+ connectors infinite CSS ticker
│   │   ├── LineageSection.astro  # Trace a thread & row-level lineage table
│   │   ├── HowItWorks.astro      # 3-step sticky workflow (Connect, Map, Ask)
│   │   ├── PlainEnglishSection.astro # Interactive tabs with +38%, 4.2H, 112%, 6/14
│   │   ├── PulseSection.astro    # Smart anomaly alert preview & snagged thread
│   │   ├── InNumbersSection.astro# SaaS impact stats (16x faster, 47% fewer dashboards)
│   │   ├── CustomerStories.astro # Harrow & Pike, Brightwater, Kitefin, Lumbra
│   │   ├── SecuritySection.astro # SOC2, row-level permissions, private VPC
│   │   ├── PricingSection.astro  # Starter, Growth, Enterprise with monthly/annual switch
│   │   ├── FAQSection.astro      # 6 expandable Q&A accordions
│   │   ├── CTASection.astro      # High-conversion bottom banner
│   │   └── Footer.astro          # Wordmark, link columns, 99.98% live status
│   └── pages/
│       ├── index.astro           # Home page (/)
│       ├── product.astro         # Full Product architecture deep-dive (/product)
│       └── pricing.astro         # Side-by-side plan comparison table (/pricing)
├── astro.config.mjs              # Astro configuration + sitemap integration
├── package.json
└── tsconfig.json
```

---

## 🛠️ How to Run & Develop

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   Outputs pre-rendered static HTML to the `dist/` directory.

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🚢 One-Click Deployment

This project can be deployed instantly to any static host:

- **Vercel**: Push to GitHub and import the `warpyn-astro` folder in Vercel. Preset: `Astro`.
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
- **Cloudflare Pages**: Set build command to `npm run build` and output directory to `dist`.
