# Models & Data Guide

## 1. Multimodal Architecture
Nuance combines two distinct modalities to predict timestamped affective states:
1. **Visual Stream**:
   - Frame sampling at 30 fps.
   - Facial landmark alignment and Action Unit (AU) detection using OpenFace / MediaPipe.
   - DenseNet / ResNet feature backbone classifying 7 core facial expressions.
2. **Acoustic & Speech Stream**:
   - Whisper ASR for speech transcription with word-level millisecond timestamps.
   - Praat / openSMILE acoustic prosody features (F0 pitch, jitter, shimmer, speaking rate).
   - Audio spectrogram transformer mapping prosodic intensity.

## 2. Fusion & Cross-Attention
- Features are fused via multi-head cross-attention into time-aligned segments (`utterances`).
- Output format adheres strictly to `packages/contracts/inference-response.schema.json`.

## 3. Dataset & Privacy
- Training datasets reside in S3 buckets in `ap-southeast-2` and are strictly excluded from git tracking (`services/inference/dataset/`).
- Local video buffers are ephemeral and purged immediately after feature extraction.
