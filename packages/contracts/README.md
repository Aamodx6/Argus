# @nuance/contracts

Shared schemas, constants, and sample fixtures establishing the API and data contract between the Nuance AWS SageMaker inference service (`services/inference`) and the application layer (`apps/app` and `apps/web`).

## Contents

- `inference-response.schema.json`: JSON Schema draft-07 specification of model output.
- `emotions.json`: Definitive enumeration of the 7 supported emotion categories and 3 sentiment valence polarities, with colors, descriptions, and emojis.
- `fixtures/`:
  - `speech.json`: Full multimodal payload containing time-aligned utterances, 7-class emotion probabilities, and 3-class sentiment scores.
  - `vision_only.json`: Payload for video content lacking audible dialogue or acoustic prosody.
  - `empty.json`: Empty analysis structure for error handling and zero-utterance responses.

## Consumption

Both the Next.js SaaS backend (`apps/app`) and the Astro frontend (`apps/web`) validate responses against this contract.
