# AWS cost reductions and remaining idle costs

**Completed 15 November 2026**, project **console dot dream**, selected Region **ap-southeast-2 (Sydney)**. The final verification pass started at **09:48:56 IST**. This is the follow-up to the [earlier expenditure audit](aws-cost-analysis-2026-11-15.md). All estimates are **USD**, at public Sydney list rates before allowances, credits and tax.

## Result

The running SageMaker endpoint was removed after explicit approval. A successful live `ListEndpoints` returned **zero endpoints**, and the serving model, deployment config and S3 archive were rechecked afterward. The full trained model/data remains available, but **live video analysis is unavailable until the endpoint is recreated**.

The known retained-capacity baseline falls from approximately **$1,337.830523/month** to **$1.048078/month**. The avoided provisioned GPU charge is **$43.9488/day** or **$1,336.776/730-hour month**, with a further **$0.00644531/month** removed from unfinished-upload storage. This is a **99.9217% reduction in the identified constant-inventory carrying cost**, not a measured reduction in a future finalized AWS bill. Request, transfer and new telemetry activity can still add charges. [SageMaker pricing](https://aws.amazon.com/sagemaker/ai/pricing/)

## Steps actually completed

| Action | Before | Verified after | Cost effect |
| --- | --- | --- | --- |
| Remove approved real-time endpoint `sentiment-analysis-endpoint` | One running `ml.g5.xlarge`, desired/current count 1 | Zero SageMaker endpoints | Avoids $1.8312/hour of provisioned GPU capacity once AWS finished deletion |
| Preserve the restore path | Model/config/archive tied to active serving variant | `sentiment-analysis-endpoint-media-compat`, `sentiment-analysis-model-media-compat`, and unchanged archive size/ETag | No retraining required merely to restore the saved deployment |
| Abort abandoned multipart uploads | Two uploads last active 5 days earlier; one held 276,824,064 bytes and one had no parts | Zero remaining multipart uploads | Removes $0.00644531/month at constant former part size |
| Add S3 incomplete-upload lifecycle | No lifecycle policy | Enabled bucket-wide abort after 7 days | Prevents indefinite accumulation of unfinished uploads; does not expire completed objects |
| Bound endpoint and sample-app logs | No retention expiry | 30 days | Bounds future log-storage growth |
| Bound training and Studio logs | No retention expiry | 90 days | Keeps recent diagnostics while bounding future growth |
| Lower Studio idle timeout | 10,080 minutes / 7 days | Default 60 minutes, allowed range 60–120 minutes for JupyterLab and Code Editor | Reduces risk of leaving future Studio apps running for days; no active apps were stopped |
| Preserve completed objects and notebook disk | 17,612 completed objects and 5 GB Studio storage | Exact same completed-object count and byte total; Studio disk retained | Keeps training data, artifacts and notebook files available |
| Recheck other recurring infrastructure | Earlier inventory showed optional production stack absent | No live Aurora/RDS, proxy, Valkey, DynamoDB tables, Lambda functions, EC2 instances/disks/snapshots, NAT gateways, interface endpoints, SQS/SNS, ECS clusters, alarms or dashboards returned | No unnecessary production infrastructure was deployed |

Deletion was requested at **09:48:10 IST**. Verification confirmed absence afterward. The exact final billing cutoff is determined by AWS metering; no claim is made that charges stopped precisely when the delete API accepted the request. Historical GPU/training charges are not refunded by removing the endpoint. Existing Free-plan credits remain subject to AWS billing refresh and eligibility. No plan upgrade or paid commitment was made.

The stale-upload cleanup checked each upload's **latest part timestamp**, not just its initiation date, and skipped any upload active within 72 hours. Both known uploads were older than that threshold. Completed S3 objects were neither deleted nor transitioned to an archive tier. [S3 incomplete-upload lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html)

Studio domain status is `InService`, and its JupyterLab/Code Editor default idle settings were read back successfully. This is a default for applicable Studio sessions, with an allowed user override of up to two hours. Other profile/space overrides or app/image behavior can affect effective session shutdown; a future session's effective timeout should be checked when launched. Studio idle shutdown does **not** shut down a SageMaker inference endpoint. [Studio idle shutdown](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-idle-shutdown-setup.html)

## Idle costs that remain

| Retained item | Current amount | Monthly list estimate | Per-minute equivalent |
| --- | --- | ---: | ---: |
| S3 training data, model archives and related files | 15.032843 GiB, 17,612 objects | $0.375821 | $0.0000085804 |
| Stopped Studio space's EBS disk | 5 GB | $0.672000 | $0.0000153425 |
| CloudWatch retained log bytes | 0.00777940 GiB stored-byte proxy | $0.00025672 | $0.000000005861 |
| **Known retained-storage total** | Constant measured sizes | **$1.048078** | **$0.0000239287** |
| GPU endpoint capacity | Zero endpoints | **$0 while absent** | **$0 while absent** |
| Abandoned multipart parts | Zero uploads | **$0 for the removed parts** | **$0 for the removed parts** |

**Yes, small idle storage costs remain, approximately $1.05/month before request and telemetry extras.** These are intentional preservation costs. Removing the Studio space would delete its notebook files unless backed up first. Removing model archives or MELD data could prevent restoration or reproducibility, so they were retained. The empty ECR repository and retained SageMaker model/config metadata do not represent a running GPU.

The log-storage row is an approximate proxy from reported stored bytes; CloudWatch billing uses its own storage metering. Some bytes may later expire under the new retention policies. No fixed savings were assigned to future idle-shutdown events, log expiry or prevented upload leaks because those depend on future usage. [S3 pricing](https://aws.amazon.com/s3/pricing/) · [CloudWatch pricing](https://aws.amazon.com/cloudwatch/pricing/)

The remaining example API Gateway HTTP API has no reserved instance charge in its current configuration; calls and egress may still cost money. No running Lambda target was found for it. It was left unchanged because deleting shared team resources with no fixed baseline cost would not materially reduce this estimate.

The project is still on the **Free plan** as verified before cleanup. Firehose, Transcribe, GuardDuty and FSx inventory was previously denied by project policy. Their absence cannot be verified through those denied reads. There were no corresponding billed service lines in the earlier audit, but this does not prove that every possible hidden/late-reported project charge is zero. No additional Cost Explorer query was made just to check this short cleanup interval.

## Restoring live analysis for a planned demo

The preserved serving archive is:

`s3://aspect-sentiment-lab/inference/sentiment-analysis-model-media-compat/model.tar.gz`

Its size is **531,866,631 bytes**, and its ETag matches the pre-deletion check. Endpoint deletion preserves the model registration/configuration, as [AWS documents](https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-delete-resources.html).

Use the invited project identity and Sydney, and first check that the endpoint has not already been recreated by another team member:

```powershell
aws sagemaker list-endpoints --profile agent-toolkit --region ap-southeast-2 --name-contains sentiment-analysis-endpoint
```

If the named endpoint is absent, recreating it starts provisioning and will resume GPU charges:

```powershell
aws sagemaker create-endpoint --profile agent-toolkit --region ap-southeast-2 --endpoint-name sentiment-analysis-endpoint --endpoint-config-name sentiment-analysis-endpoint-media-compat
aws sagemaker wait endpoint-in-service --profile agent-toolkit --region ap-southeast-2 --endpoint-name sentiment-analysis-endpoint
```

Recreation requires available quota/capacity, usable project credits/plan state, the saved image/artifact, and permitted IAM/S3 access. Allow for model loading and test a short video before a demo. It does not require starting a new training job. After a demo, deliberately remove the endpoint again if continuous service is unnecessary, then verify its absence.

SageMaker async scale-to-zero is still an **undeployed future option**, not something enabled by this cleanup. It requires deploying and testing the queue/result workflow. At steady traffic a busy GPU still costs money; at sparse traffic scale-to-zero can avoid idle GPU hours. No paid database/cache stack was introduced for this cleanup.

## Operating controls and evidence

- The [machine-readable result](aws-cost-2026-11-15/optimization-result.json) records verified state, preserved assets, exact byte counts, retention days and Decimal-calculated cost equivalents.
- Original configuration and the endpoint restore manifest were saved locally outside Git before mutation. The existing saved endpoint config is sufficient for the restore commands above.
- The initial [expenditure audit](aws-cost-analysis-2026-11-15.md) and its CSVs remain historical snapshots. This follow-up supersedes their current-state statements about the running endpoint, missing retention and incomplete uploads.
- The cleanup used existing resources and temporary credentials. No new scheduled Lambda, dashboard, NAT, database, cache or alert service was created. API/list requests used to verify the changes can consume allowances or cause small request charges, and AWS may report these later.
- Review credit and plan status in **AWS Settings → Billing**. Region confirmation is under **AWS Settings → View all projects → Overview → Additional Info → Region**. The selected Region for every changed resource was Sydney.
- No GitHub commit or push was made. The local documentation records the completed changes and remaining idle costs.
