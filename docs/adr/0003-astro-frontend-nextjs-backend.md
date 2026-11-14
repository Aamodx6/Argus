# ADR 0003: Astro Frontend with Next.js SaaS Backend

## Status
Accepted

## Context
The landing page and model console require lightning-fast loading, View Transitions, and custom Bento Grid styling, while user authentication, database persistence, and S3 presigned URL generation require Node.js server route handlers and Neon Postgres integration.

## Decision
- Use Astro (`apps/web`) on port `4321` for the public landing page, authentication views, and model console.
- Use Next.js (`apps/app`) on port `3000` as the headless SaaS API backend, providing `/api/auth/login`, `/api/auth/signup`, `/api/quota`, `/api/upload-url`, and `/api/sentiment-inference`.
- Both applications run locally and communicate via standard JSON REST endpoints.

## Consequences
- Fast initial page loads and seamless Framer/View Transitions on the frontend.
- Secure, modular API layer backed by Neon Lakebase Postgres and bcrypt password hashing.
