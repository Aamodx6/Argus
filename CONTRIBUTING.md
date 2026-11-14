# Contributing to Nuance

Thank you for your interest in contributing to Nuance!

## Code of Conduct
Please read and adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Monorepo Structure
- `apps/web`: Public landing page and developer console built with Astro.
- `apps/app`: SaaS backend API routes and authentication built with Next.js.
- `services/inference`: Machine learning models and SageMaker deployment code.
- `packages/contracts`: Shared schemas, emotion types, and fixtures.
- `docs/`: Technical specifications, guides, and architecture decision records (ADRs).

## Development Workflow
1. Fork and clone the repository.
2. Install dependencies:
   ```bash
   cd apps/web && npm install
   cd ../app && npm install
   ```
3. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
4. Run local servers:
   ```bash
   # Terminal 1: apps/app (port 3000)
   cd apps/app && npm run dev

   # Terminal 2: apps/web (port 4321)
   cd apps/web && npm run dev
   ```
5. Ensure tests and lint pass before submitting your Pull Request.

## Pull Request Guidelines
- Follow the template in `.github/PULL_REQUEST_TEMPLATE.md`.
- Keep changes scoped and self-contained.
- Verify that both `localhost:4321` and `localhost:3000` continue to run cleanly.
