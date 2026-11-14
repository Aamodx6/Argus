# Monitoring Architecture

Nuance monitors both the application edge (`apps/web`, `apps/app`) and the ML inference cluster (`services/inference`).

## 1. CloudWatch & Model Observability
- **Region**: Locked to `ap-southeast-2` (Sydney) per project constraints.
- **Metrics Collected**:
  - `InferenceLatency`: Median and p99 round-trip execution time (Target: < 250ms).
  - `ModelErrors4xx`: Client payload format violations or oversized videos (> 128 MiB).
  - `ModelErrors5xx`: SageMaker GPU container worker crashes or CUDA OOM events.
  - `GPUUtilization`: NVIDIA T4/A10G instance core and VRAM usage.

## 2. Neon Lakebase Postgres Telemetry
- Database connection pool health.
- Query execution duration for user authentication, API key lookups, and quota increments.

## 3. Application Health
- Endpoint uptime monitored via synthetic canary probes.
- Rate limits enforced on a per-key basis (10,000 requests/month default tier).
