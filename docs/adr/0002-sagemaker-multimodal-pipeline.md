# ADR 0002: SageMaker Multimodal Pipeline in ap-southeast-2

## Status
Accepted

## Context
Video sentiment detection requires synchronized audio prosody, facial expression tracking, and speech transcription. All AWS Regional infrastructure for this project is constrained to `ap-southeast-2` (Sydney).

## Decision
Deploy the inference pipeline as a SageMaker real-time endpoint running on accelerated GPU instances in `ap-southeast-2`:
- Asynchronous presigned S3 uploads for video files up to 128 MiB.
- Real-time inference request routing with sub-250ms target latency.
- Strict adherence to the `ap-southeast-2` region constraint for all S3 and SageMaker resources.

## Consequences
- Compliance with AWS account policy and governance boundaries.
- Minimizes cross-region data transfer latency and cost.
