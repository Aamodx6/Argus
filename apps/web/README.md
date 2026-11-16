# Argus website and browser console

`apps/web` contains the Astro 7 static marketing pages, JSON-login views and video console. Marketing pages use imported Framer HTML and local runtime assets; authentication uses a shared native form. The unused component-based template and duplicate image directory have been removed. The remaining Framer bundles are needed for marketing-page hydration; do not delete them merely because they have no TypeScript importers.

## Local development

Run `npm ci`, copy `.env.example` to `.env.local`, and run `npm run dev`. Start `apps/app` separately on port 3000. Astro serves port 4321. Its development `/api` proxy targets `PUBLIC_API_URL`, defaulting to localhost:3000. All API authorization remains on the Next.js backend.

| Build-time variable | Purpose |
| --- | --- |
| `PUBLIC_SITE_URL` | Marketing origin used by canonical URLs and sitemap; set the real HTTPS origin for production |
| `PUBLIC_API_URL` | Backend HTTP(S) origin, without a path; empty means same-origin `/api` requests and requires a reverse proxy in production |
| `PUBLIC_REQUIRE_MODERATION` | Defaults to guarded uploads; only `0` selects the legacy client flow; must match the backend policy |

These values are public and baked into the static build. Put secrets only in the backend. The static host and `astro preview` do not acquire the development API proxy automatically. Set the deployed backend origin or configure a production `/api` reverse proxy. The backend must allow the browser origin and required preflight headers.

## Routes

| Route | Behavior |
| --- | --- |
| `/`, `/product`, `/sources`, `/customers`, `/pricing`, `/changelog` | Marketing pages |
| `/contact` | Working account-creation form |
| `/signup` | Static redirect to `/contact` |
| `/login` | JSON login, storing the returned product key for the console |
| `/console` | Browser workspace; authenticated API key required for real requests |
| `/app`, `/dashboard` | Static redirects to `/console` |

Static redirects are generated as redirect HTML with a meta refresh. A host can configure HTTP redirects for faster transitions. Template links to implemented pages are normalized; unimplemented template destinations are disabled rather than sent to the upstream template site. Navigation uses real page loads so authentication and console scripts initialize consistently.

Pricing and changelog use an empty marketing shell before their exported components render. Pricing must not reuse the home-page HTML, which previously flashed the marquee during navigation. Branding is also corrected after hydration, and the header retains a visible Sign in action. Authentication keeps the reference layout's form and side cards while using native validated fields.

The Astro login flow uses a product API key. It does not create the separate Auth.js cookie session used by the retained Next.js login/dashboard pages. The API authorizes every request regardless of browser UI state.

## Analysis behavior

Guarded mode uses `/api/async-inference/uploads`, the returned signed multipart S3 form, `/api/async-inference/jobs`, and status polling. Legacy mode is explicit and remains blocked if server moderation is enabled. A request failure is shown as an error and never converted into sample predictions. The sample button uses saved example data and makes no inference request.

The GPU endpoint is currently removed for cost control, and the optional async infrastructure has not been deployed. An unavailable backend should return an error; a successful static build does not demonstrate live inference.

## Verification

Run `npm test` for origin, navigation and upload-flow regressions, then `npm run build`. `ASTRO_TELEMETRY_DISABLED=1` avoids writing telemetry preferences outside the workspace in restricted environments. `npm run preview` serves the generated static site.

See [routing and dead-code review](../../docs/reports/routing-and-dead-code-review-2026-11-15.md) for checked routes, removed files and remaining limitations. Original template attribution is retained in [third-party notices](../../THIRD_PARTY_NOTICES.md).
