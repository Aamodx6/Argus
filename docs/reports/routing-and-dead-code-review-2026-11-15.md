# Dead-code and routing review

## UI follow-up after screenshot review

Pricing had inherited home-page server-rendered HTML, causing its marquee to flash before the pricing component mounted. It now shares an empty marketing shell with the new local `/changelog` route. The conflicting document-snapshot/body-translation transitions were removed. Real header clicks from home to pricing, changelog and Sign in were verified; sampled pricing headings never included the home hero.

The exported runtime restored Warpyn after hydration. A mutation-aware branding pass now keeps visible text, logo accessibility labels and page metadata branded Nuance. Header Sign in suppression was removed, its action restored, and the two-column sign-in/registration design restored around the corrected native forms. Loading buttons retain explicit labels and status stays inside the form.

Chrome checks at390,768 and1600pixels found no horizontal page overflow, no visible Warpyn branding, and a visible `/login` action on pricing, changelog and login. The website now builds twelve routes, including local Sources and Customers pages. All five navigation tabs remain visible on the authentication page at these widths after its entrance animation finishes. Sources and Customers were also verified by clicking their links from Sign in. The earlier nine-route evidence below records the initial review, before this follow-up.

The authentication header still uses separate markup and styles from the imported marketing header. Restoring its links does not establish an identical header or a persistent shared navigation shell; that visual inconsistency remains open.

Local backend connection settings were subsequently supplied through the Git-ignored `.env.local`. A read-only Neon connection check found the expected application tables, and the restarted login API correctly rejected a nonexistent test identity. No records were created for that check. These settings are excluded from the PR. `INFERENCE_MODE=mock` is not read by the current application and therefore does not prevent AWS calls; public upload deployments must keep moderation enforcement enabled. These checks do not establish live inference availability.

Reviewed **15 November 2026**, against the local Nuance checkout based on `main` commit `7275ff7`. Changes are local and uncommitted. Earlier cost-report changes were preserved. No GitHub push, cloud deployment, database migration or AWS resource change was performed for this review.

## Findings fixed

| Finding | Change |
| --- | --- |
| `/api/quota` returned the first user's quota, API key and profile when the supplied key was absent or invalid | Removed the fallback. A well-formed Bearer key is required; only the exact matching quota can be returned. Anonymous and invalid keys receive401, database unavailability receives503, and responses use `Cache-Control: no-store`. Query-string keys are no longer accepted. |
| Astro console used a hard-coded API origin and embedded sample API key | Added public build-time origin configuration, removed the embedded key and required a signed-in key for real uploads. |
| A failed real upload could produce sample predictions | Removed the automatic simulation fallback. The explicit sample button remains; real request errors are displayed. |
| Astro console called legacy routes while server moderation defaults to enabled | Added guarded multipart upload, job submission and status polling. Guarded quota requests use `/api/async-inference/quota`. Legacy mode requires an explicit client setting and remains subject to the server's moderation gate. |
| Imported authentication forms did not match the backend contract | Replaced the two brittle imported form implementations with one shared native `AuthPage` and `auth-form.js`. Login uses email/password. Registration includes matching password confirmation. Forms use POST even if JavaScript fails to initialize. |
| `/signup` hydrated the template landing page instead of registration | Made it an explicit alias for the working account-creation route `/contact`. |
| Template navigation pointed at downloaded-folder URLs and upstream template pages | Normalized supported destinations to real local paths, disabled unimplemented template links, and replaced the legacy SPA interception with real page navigation. |
| Sign-in and signup links in Next.js pointed at localhost | Added `NEXT_PUBLIC_SITE_URL`; standalone fallback links remain valid local app routes. |
| Next.js dashboard depended entirely on middleware for authorization | Added a server-side session check before its database lookup. |
| `GuardedQuota` existed but had no importer | Connected it to the guarded Next.js dashboard and hid the legacy counter in that mode. |
| Code examples used legacy operations in guarded mode and an invalid undotted file extension | Guarded mode documents its actual job flow. Legacy examples use `.mp4`. |
| Async catch-all reported missing deployment configuration before validating paths/credentials | Unknown operations now receive404; anonymous supported operations receive401; authenticated supported operations receive503 when the service is unconfigured. |
| Transcripts were inserted into console HTML without escaping | Escaped transcript and label text before interpolation. Browser testing verifies markup is displayed as text. |
| CI ignored lint failures and did not build/test the backend | Removed `npm run lint || true` and the unlocked-install fallback. CI now runs locked installs, lint/type checks, both test suites and both production builds with dummy build-only database settings. |
| README paths referenced directories removed by the restructure | Updated active package/documentation paths and added this review. |

The server-side authorization check follows the principle of checking access at the data boundary, as described in [Next.js authentication guidance](https://nextjs.org/docs/app/guides/authentication). Middleware remains an additional redirect layer.

## Removed or retained code

Removed **17 unreferenced website modules**: fourteen template-era `.astro` components, `BaseLayout.astro`, `config/site.ts`, and `styles/global.css`. The active pages did not import them. The new shared authentication/configuration components are actively imported.

Removed **52 duplicate image files**, totaling **9,720,911 bytes**, from `apps/web/public/images/`. Each removed file was byte-identical to a retained file under `public/framerusercontent.com/images/`, and active source/public code contained no direct references to the removed root image paths. Browser route checks found no missing local assets after rebuilding.

Also removed three unused Neon configuration-object exports, an unused console result variable, and obsolete transition-controller/progress CSS. The working Neon diagnostics functions remain. The duplicate signup implementation was replaced by a redirect rather than maintained as another divergent form.

Prisma is **in active use** by authentication, users, quotas, video ownership and diagnostics. Its schema, migration, generated client dependencies and adapters were retained. The optional Neon diagnostic route also has real consumers and was retained.

Opaque Framer runtime bundles, font/CMS assets and upstream-reference HTML were retained where static import analysis cannot establish that they are unused. The marketing pages still need these runtime assets. Training, model-serving, calibration, promotion and Lambda-handler files were retained as independently invoked entry points; lack of a frontend import does not establish dead code.

The old local `ai-video-sentiment-saas-main` directory now contains generated dependency/build remnants. It was excluded from Git alongside retired-layout remnants and build metadata. It was not recursively deleted. Other workspace repositories, datasets, videos, transcripts, cost evidence and historical reports outside Nuance were preserved.

## Verified website routes

| Route | Browser result |
| --- | --- |
| `/` |200, visible marketing page and Nuance title |
| `/product` |200, rendered product page |
| `/pricing` |200, rendered pricing page |
| `/contact` |200, account-creation form with confirmation field |
| `/signup` | Static redirect HTML, browser reaches `/contact` |
| `/login` |200, email/password login form |
| `/console` |200, workspace; real APIs still require a key |
| `/app` | Static redirect HTML, browser reaches `/console` |
| `/dashboard` | Static redirect HTML, browser reaches `/console` |

Static Astro aliases currently return redirect HTML with a meta refresh rather than HTTP301/302. A deployment host can add HTTP redirects. The private/auth aliases are excluded from the generated sitemap. The site origin comes from `PUBLIC_SITE_URL`, replacing the template's example hostname.

Browser verification used installed Chrome against local production output, with external network requests blocked. It checked all nine pages for visible content, script errors and missing local assets. A DOM navigation click was used for the animated marketing link. The checks did not establish pixel-level visual quality or external asset/provider availability.

## Verified backend behavior

| Request | Result |
| --- | --- |
| Anonymous `GET /` |302 to Next.js login |
| `GET /login`, `GET /signup` |200 |
| Anonymous `GET /api/quota` |401 |
| `OPTIONS /api/quota` |204, with configured API headers |
| `POST /api/upload-url` with moderation enabled |403, legacy path refused |
| `POST /api/sentiment-inference` with moderation enabled |403, legacy path refused |
| Anonymous `GET /api/neon/status` |404, diagnostic token required |
| Anonymous `GET /api/async-inference/quota` |401 |
| `GET /api/async-inference/unknown` |404 |
| Invalid-body `POST /api/auth/login` |400 |
| Invalid-body `POST /api/auth/signup` |400 |

Regression tests additionally check that invalid quota keys cannot select another user, query-string keys cannot authenticate, valid keys select only their own quota, database errors produce503, invalid job IDs produce404, and an authenticated known async operation produces503 when deployment configuration is absent.

These results establish authorization/dispatch behavior. They do not establish successful live model, database, payment or identity-provider integration.

## Checks completed

- `apps/app`: **12 tests passed**, including the eight existing guardrail tests and four authorization/routing tests.
- `apps/web`: **8 tests passed**, covering origin validation, POST-form fallback, template routes, guarded/legacy upload dispatch, failed/blocked requests and early input rejection.
- `apps/app`: `npm run check` passed with no lint warnings/errors; TypeScript checking passed.
- Both `npm run build` commands passed. Next.js generated the expected page/API manifest; Astro generated nine pages and its sitemap.
- Browser login submitted once and reached the console using mocked credentials. Registration rejected mismatched confirmation before submitting, then reached login with a mocked successful response.
- Browser guarded upload completed using mocked API/S3 responses, displayed escaped transcript text and showed an actual service-error message instead of sample results on failure.
- Existing cost-report validation and documentation-link checks were preserved. Git whitespace checks passed.

Evidence: [browser checks](routing-browser-checks-2026-11-15.json), [HTTP checks](routing-api-checks-2026-11-15.json), [app tests](../../apps/app/tests/routing.test.mjs), [web tests](../../apps/web/tests/routing.test.mjs).

## Configuration and remaining limits

`PUBLIC_SITE_URL`, `PUBLIC_API_URL` and `PUBLIC_REQUIRE_MODERATION` are public Astro **build-time** configuration. Set the actual deployed origins before building production assets. An empty API origin uses same-origin `/api` URLs and requires a production reverse proxy. The Astro development proxy does not automatically exist on a static host or `astro preview`. [Astro environment variables](https://docs.astro.build/en/guides/environment-variables/)

Set `NEXT_PUBLIC_SITE_URL` in the Next.js app for links back to the marketing origin. Keep `PUBLIC_REQUIRE_MODERATION` aligned with backend `REQUIRE_MODERATION`; the server's decision remains authoritative even if a browser changes its client flag.

The Astro JSON login stores a product API key for API requests. The retained Next.js login/dashboard use Auth.js cookie sessions. They are distinct flows and were not presented as one shared cookie session.

No real user was registered or live database updated. Successful browser auth and inference responses were mocked. The GPU endpoint remains removed for cost control, and optional async infrastructure remains undeployed. An unavailable inference service should therefore show an error until it is deliberately deployed/configured. No GPU was recreated for these tests.

Product/pricing still contain imported template content and claims that need a separate content review. Unimplemented template legal/company/source pages remain disabled, not invented as functioning Nuance services. This was a targeted dead-code and route repair, not a claim that every optional feature or historical workspace file is production-ready.
