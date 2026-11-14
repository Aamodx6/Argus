# ADR 0001: Monorepo Codebase Structure

## Status
Accepted

## Context
The Nuance project consists of an Astro landing page and interactive console, a Next.js SaaS backend with Neon Postgres authentication, AWS SageMaker ML services, and shared API contract definitions. Managing these in disconnected directories led to path confusion and version drift.

## Decision
Restructure the repository into a monorepo format:
- `apps/web`: Astro frontend (landing page, auth views, Bento console).
- `apps/app`: Next.js SaaS application, database models, and upload endpoints.
- `services/inference`: Model training, deployment, and monitoring code.
- `packages/contracts`: Schemas, emotion enumerations, and test fixtures.
- `docs/`: Centralized documentation, ADRs, runbooks, and roadmaps.

## Consequences
- Single root git history with unified CI/CD.
- Simplified dependency management and development workflows.
- Shared contract validation between services and applications.
