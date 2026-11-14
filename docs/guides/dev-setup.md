# Local Development Setup

This guide walks through configuring and running the Nuance monorepo locally.

## Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- Python 3.10+ (for model development in `services/inference`)

## Directory Layout
- `apps/web`: Nuance marketing landing page and console (Astro, port `4321`)
- `apps/app`: Nuance SaaS backend, auth APIs, quota engine, inference routes (Next.js, port `3000`)
- `services/inference`: SageMaker model training and deployment scripts
- `packages/contracts`: Shared schemas and fixtures

## Quick Start

### 1. Install Dependencies
```bash
# Web application (Astro)
cd apps/web
npm install

# SaaS backend (Next.js)
cd ../app
npm install
```

### 2. Environment Variables
Copy `.env.example` in each app:
```bash
cp apps/web/.env.example apps/web/.env
cp apps/app/.env.example apps/app/.env.local
```

### 3. Launching Localhost Servers
In terminal 1 (SaaS backend):
```bash
cd apps/app
npm run dev
# Running on http://localhost:3000
```

In terminal 2 (Web & Console):
```bash
cd apps/web
npm run dev
# Running on http://localhost:4321
```

Access the frontend at `http://localhost:4321` and the console at `http://localhost:4321/console`.
