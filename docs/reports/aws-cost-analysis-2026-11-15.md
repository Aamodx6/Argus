# Nuance AWS expenditure audit

**Subsequent cleanup completed:** the [cost-reduction record](aws-cost-reductions-2026-11-15.md) supersedes this earlier snapshot's live-resource status. The GPU endpoint was removed with approval, stale uploads were aborted, and retention/Studio idle controls were verified. The historical billing exports and scenario calculations below remain unchanged.

Audit date **15 November 2026**. Project **console dot dream**. Selected Region **ap-southeast-2 (Sydney)**. Repository **Aamodx6/Nuance**, local `main` updated to **7275ff7** before inspection. Prices and live state are a point-in-time snapshot. All monetary values are **USD**, with no currency conversion. Billing export dates use UTC.

Inventory collection started at **2026-11-15T03:45:09.744759+00:00**. Resource details and price lookups were collected during the same audit session. The credit balance and expenditure totals are snapshots rather than continuously refreshed values.

## Findings requiring attention

1. **A GPU endpoint is running now.** `sentiment-analysis-endpoint` is `InService`, serving config `sentiment-analysis-endpoint-media-compat`, with **one ml.g5.xlarge** desired and current instance. Its compute rate is **$1.8312/hour**, **$0.03052/minute**, **$43.9488/day**, or **$1,336.776/730-hour month**. Idle time incurs this compute charge. This current observation supersedes older documentation saying the endpoint was deleted.
2. AWS reports plan **FREE / ACTIVE**, with **$31.82 credits remaining**, and plan expiration **7 April 2027**. At the GPU compute rate alone, that reported credit balance corresponds to **17.38 hours**. This is an illustration, not a countdown or guaranteed remaining time. Usage already accrued but awaiting billing refresh can make the actual time shorter. The owner can inspect credits and project status in **AWS Settings → Billing**. No upgrade was performed.
3. Cost Explorer returns **$88.5843063840 gross November usage** and **$24.9173186161 gross October usage**. Credits offset these amounts to approximately zero net in the available ledger. Credits do not make the underlying usage free indefinitely, and a zero rounded net is not proof of a finalized paid invoice.
4. Retained storage includes **17,612 S3 objects / 15.032843 GiB**, **2 incomplete multipart uploads / 0.257812 GiB**, and **5 GB of Studio EBS**. The bucket has no lifecycle configuration. All four Sydney log groups have no explicit retention.
5. The current full production architecture is **not deployed** in this project. There are no discovered Aurora clusters, RDS Proxy instances, DynamoDB tables, ElastiCache caches, Lambda functions, SQS queues, SNS topics, CloudFormation stacks, or CloudWatch alarms/dashboards. IAM roles, retained model registrations and endpoint configs do not imply their referenced application stacks are deployed.
6. Inventory of Firehose, Transcribe, GuardDuty malware plans and FSx is **unverified because an SCP explicitly denied the read calls**. Their billing entries are absent from the queried periods. Firehose and Transcribe require the Paid plan in this AWS experience, while GuardDuty and FSx require advanced features. An IAM allow cannot override the SCP. See [AWS experience service support](https://docs.aws.amazon.com/accounts/latest/reference/supported-services-sign-up-new.html).

## What was measured and what can be known per minute

The audit authenticated to the invited team's project and asserted the backing project ID before reading resources. It read project-wide Cost Explorer gross usage by **service × usage type × day**, and monthly charges by **service × record type**, from **1 January through 15 November 2026**, with an exclusive API end date of **16 November**. Detailed daily exports cover October and November, the months containing returned usage. No nonzero costs were returned for January–September. No tenant or Nuance-specific allocation tags are available in these responses, so historical costs are **project-wide**, including team experiments and the example web API.

The report distinguishes:

- **Reported actual usage** — Cost Explorer's returned decimal costs, subject to estimation and billing lag.
- **Credits, refunds and tax** — separate ledger records. No refund records were returned and tax is zero in the snapshot.
- **Current carrying cost** — live retained capacity multiplied by current public on-demand rates. This is a forward estimate before allowances and credits.
- **Planned architecture cost** — code-driven assumptions for resources absent from the project. These are not charges already incurred.
- **Per-minute equivalents** — hourly rates divided by 60, or monthly scenario costs divided by that scenario's minute count. Request and storage costs do not turn into measured minute-level bills by this division.

AWS does not provide a universal minute-by-minute billing ledger through these APIs. Cost Explorer normally provides daily/monthly data, with optional hourly data for the last 14 days. This audit did not enable hourly data, CUR/Data Exports, new resources, or paid billing preferences. See [billing granularity](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-services-hourly.html) and [hourly-data charges](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-hourly-granularity.html). Bills and Cost Explorer refresh at least daily and can differ until finalization, as [AWS explains](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/differences-billing-data-cost-explorer-data.html).

The API returned estimated flags, retained per row in the CSVs. Do not treat missing current-day usage as zero consumption. An invoice and AWS Settings credit history remain the authority for money payable and any credits awarded or expired outside this usage ledger.

## Billed expenditure and credits

| Billing period | Gross usage USD | Credits USD | Tax USD | Net ledger USD |
| --- | --- | --- | --- | --- |
| 2026-10 | $24.9173186161 | -$24.9173186176 | $0.0000000000 | -$0.0000000015 |
| 2026-11 | $88.5843063840 | -$88.5843064286 | $0.0000000000 | -$0.0000000446 |

Combined returned gross usage is **$113.5016250001** and returned credits are **-$113.5016250462**. Sub-cent negative net values arise from exported precision/rounding. The **remaining credit balance is a different API result**, not something inferred from subtracting these charges from an assumed initial credit grant.

### Every service in the returned ledger

| Service | October usage USD | November usage USD | Credit allocation, both months USD |
| --- | --- | --- | --- |
| AWS CloudShell | $0.0000000000 | $0.0000000000 | $0.0000000000 |
| AWS Data Transfer | $0.0000000000 | $0.0000000000 | -$0.0037205291 |
| AWS Glue | $0.0000000000 | $0.0000000000 | $0.0000000000 |
| AWS Key Management Service | $0.0000000000 | $0.0000000000 | $0.0000000000 |
| AWS Lambda | $0.0000000000 | $0.0000000000 | $0.0000000000 |
| AWS Secrets Manager | $0.0000200000 | $0.0000000000 | -$0.0000200000 |
| AWS Service Catalog | $0.0000000000 | $0.0000000000 | $0.0000000000 |
| Amazon API Gateway | $0.0000000000 | $0.0000012900 | -$0.0000012900 |
| Amazon Elastic Compute Cloud - Compute | $0.0782113901 | $0.0000000000 | -$0.0782113901 |
| Amazon SageMaker | $24.5537020900 | $88.3610796708 | -$112.9147817613 |
| Amazon Simple Notification Service | $0.0000000000 | $0.0000000000 | $0.0000000000 |
| Amazon Simple Queue Service | $0.0000000000 | $0.0000000000 | $0.0000000000 |
| Amazon Simple Storage Service | $0.2244237952 | $0.1888496475 | -$0.4132327665 |
| Amazon Virtual Private Cloud | $0.0035583350 | $0.0000000000 | -$0.0035583350 |
| AmazonCloudWatch | $0.0479400000 | $0.0343757757 | -$0.0823158200 |
| EC2 - Other | $0.0094630058 | $0.0000000000 | -$0.0057831542 |
| Tax | $0.0000000000 | $0.0000000000 | $0.0000000000 |

AWS sometimes allocates transfer credits to the separate **AWS Data Transfer** service even when usage is billed under S3 or EC2 - Other. Individual service net balances therefore do not establish which resource received each credit. The complete project ledger reconciles.

### Every nonzero usage line, including fractions of a cent

| Month | Service / usage type | Quantity and unit | Gross USD |
| --- | --- | --- | --- |
| 2026-10 | AWS Secrets Manager / `APS2-AWSSecretsManagerAPIRequest` | 4 API Requests | $0.0000200000 |
| 2026-10 | Amazon Elastic Compute Cloud - Compute / `APS2-BoxUsage:c7i-flex.large` | 0.706389 Hrs | $0.0782113901 |
| 2026-10 | Amazon SageMaker / `APS2-Studio:CodeEditor-ml.c5.large` | 14.23102306 Hrs | $1.8927260669 |
| 2026-10 | Amazon SageMaker / `APS2-Studio:CodeEditor-ml.t3.medium` | 12.46038055 Hrs | $0.7850039747 |
| 2026-10 | Amazon SageMaker / `APS2-Studio:JupyterLab-ml.t3.medium` | 7.17609417 Hrs | $0.4520939328 |
| 2026-10 | Amazon SageMaker / `APS2-Studio:VolumeUsage.gp3` | 4.0712618837 GB-Month | $0.5471775976 |
| 2026-10 | Amazon SageMaker / `APS2-Train:ml.g5.xlarge` | 12.76862417 Hrs | $20.8767005180 |
| 2026-10 | Amazon Simple Storage Service / `APS2-Requests-Annotation-Tier1` | 2 Requests | $0.0000110000 |
| 2026-10 | Amazon Simple Storage Service / `APS2-Requests-Tier1` | 18315 Requests | $0.1007325000 |
| 2026-10 | Amazon Simple Storage Service / `APS2-Requests-Tier2` | 16113 Requests | $0.0070897200 |
| 2026-10 | Amazon Simple Storage Service / `APS2-Requests-Tier8` | 2 Requests | $0.0000600000 |
| 2026-10 | Amazon Simple Storage Service / `APS2-Tables-Requests-Tier1` | 1 Requests | $0.0000055000 |
| 2026-10 | Amazon Simple Storage Service / `APS2-TimedStorage-ByteHrs` | 4.653183946 GB-Month | $0.1163295991 |
| 2026-10 | Amazon Simple Storage Service / `APS3-Requests-Tier1` | 3 Requests | $0.0000150000 |
| 2026-10 | Amazon Simple Storage Service / `Requests-Tier1` | 34 Requests | $0.0001700000 |
| 2026-10 | Amazon Simple Storage Service / `Requests-Tier2` | 1 Requests | $0.0000004000 |
| 2026-10 | Amazon Simple Storage Service / `USE1-APS2-AWS-Out-Bytes` | 0.0000038081 GB | $0.0000000761 |
| 2026-10 | Amazon Simple Storage Service / `USW2-Requests-Tier1` | 2 Requests | $0.0000100000 |
| 2026-10 | Amazon Virtual Private Cloud / `APS2-PublicIPv4:InUseAddress` | 0.711667 Hrs | $0.0035583350 |
| 2026-10 | AmazonCloudWatch / `APS2-CW:GMD-Metrics` | 4794 Metrics | $0.0479400000 |
| 2026-10 | EC2 - Other / `APS2-APS1-AWS-Out-Bytes` | 0.0375495069 GB | $0.0036798517 |
| 2026-10 | EC2 - Other / `APS2-EBS:VolumeUsage.gp3` | 0.0602411888 GB-Month | $0.0057831541 |
| 2026-11 | Amazon API Gateway / `APS2-ApiGatewayHttpRequest` | 1 Requests | $0.0000012900 |
| 2026-11 | Amazon SageMaker / `APS2-Host:ml.g5.xlarge` | 23.66200306 Hrs | $43.3298600035 |
| 2026-11 | Amazon SageMaker / `APS2-Hst:Data-Bytes-In` | 0.0000046966 GB | $0.0000000751 |
| 2026-11 | Amazon SageMaker / `APS2-Hst:Data-Bytes-Out` | 0.0000199825 GB | $0.0000003197 |
| 2026-11 | Amazon SageMaker / `APS2-Studio:VolumeUsage.gp3` | 2.2569429865 GB-Month | $0.3033331397 |
| 2026-11 | Amazon SageMaker / `APS2-Train:ml.g5.xlarge` | 27.35650528 Hrs | $44.7278861328 |
| 2026-11 | Amazon Simple Storage Service / `APS2-Requests-Tier1` | 4479 Requests | $0.0246345000 |
| 2026-11 | Amazon Simple Storage Service / `APS2-Requests-Tier2` | 64733 Requests | $0.0284825200 |
| 2026-11 | Amazon Simple Storage Service / `APS2-Requests-Tier8` | 1 Requests | $0.0000300000 |
| 2026-11 | Amazon Simple Storage Service / `APS2-TimedStorage-ByteHrs` | 5.4236810666 GB-Month | $0.1355920272 |
| 2026-11 | Amazon Simple Storage Service / `APS2-USE1-AWS-Out-Bytes` | 0.0004142899 GB | $0.0000406003 |
| 2026-11 | Amazon Simple Storage Service / `Requests-Tier1` | 14 Requests | $0.0000700000 |
| 2026-11 | AmazonCloudWatch / `APS2-CW:OTEL:Bytes:AWS` | 0.0687515514 GigaBytes | $0.0343757757 |

The downloadable [daily service and usage ledger](aws-cost-2026-11-15/daily-service-usage.csv) includes **every returned row**, including zero-priced usage and tax rows. [Monthly usage types](aws-cost-2026-11-15/monthly-usage-types.csv) preserves quantities and units. GB-month, hours, request counts and metric counts are never summed into a single usage number. [Credits and records](aws-cost-2026-11-15/monthly-service-credits.csv) preserves credit allocations independently.

Historical transfer rows include non-Sydney prefixes (`APS3`, `USE1`, `USW2`) and Sydney–Singapore (`APS2-APS1`) traffic. These are returned historical billing facts, not permission to create cross-Region resources. The resource audit did not deploy, replicate or transfer application data to another Region. Global CloudFront, WAF and the public billing/pricing control planes were inspected where necessary.

## Live resources and their carrying costs

### SageMaker endpoint

The endpoint is a **real-time GPU endpoint**. Its active config contains neither `AsyncInferenceConfig` nor `DataCaptureConfig`. Application Auto Scaling lists no SageMaker targets. Therefore **async scale-to-zero, automatic fleet scaling, and configurable 5% capture are code capabilities, not active cost controls on this endpoint**.

The active endpoint description retains an `InsufficientInstanceCapacity` failure reason from an earlier operation while current status is `InService` and current/desired count is one. The active config is `media-compat`, not the retained `media-compat-v2` config. A previous failed update does not establish that GPU billing stopped.

CloudWatch returned **19.0 invocations in the sampled preceding 24 hours**. That count is useful evidence of low traffic but does not prove all other minutes are idle or attribute calls to users. A continuously provisioned day at today's rate costs **$43.9488** before other charges. Updating or replacing a fleet can temporarily overlap old and new instances. Inference input/output byte usage is separately present in the ledger and rate card.

Retained **four model registrations and four endpoint configs** carry no provisioned instance charge themselves. Their S3 archives remain billable storage. Deleting an endpoint would interrupt real inference, and no deletion was performed during this audit. [SageMaker AI pricing](https://aws.amazon.com/sagemaker/ai/pricing/)

### S3 storage, including unfinished uploads

Bucket `aspect-sentiment-lab` is in Sydney, uses default **SSE-S3 AES256**, and has no enabled versioning or lifecycle policy. A bucket-key flag alone does not make its SSE-S3 objects KMS-encrypted. Existing objects with individual encryption overrides were not opened or exhaustively inspected. All listed completed objects are in S3 Standard.

| Prefix | Objects | GiB | Storage USD/month |
| --- | --- | --- | --- |
| code | 19 | 0.000180 | $0.000004 |
| dataset | 15912 | 10.156917 | $0.253923 |
| inference | 22 | 2.484693 | $0.062117 |
| models | 1 | 0.493743 | $0.012344 |
| tensorboard | 2 | 0.000014 | $0.000000 |
| training-output | 1656 | 1.897296 | $0.047432 |

Completed-object storage at a constant inventory is **$0.375821/month**. Incomplete parts add **$0.006445/month**, giving **$0.382266/month** before request/transfer charges. The incomplete parts are **276,824,064 bytes**, billed even though they are absent from a normal completed-object listing. No uploads were aborted. [S3 pricing](https://aws.amazon.com/s3/pricing/)

This estimate uses the first storage tier, **$0.025/GiB-month**. PUT/COPY/POST/LIST are **$0.0055/1,000 requests** and GET/other reads **$0.00044/1,000 requests** in the retrieved Sydney catalog. Multipart uploads create billable part/request operations. New object versions, replication, lifecycle transitions, minimum-duration storage classes, tags, retrievals, inventory reports, and internet egress have separate meters when enabled. None is silently included in this simple Standard byte estimate.

### Studio retained EBS

There are no running Studio apps or notebook instances. A retained JupyterLab space has **5 GB of EBS storage**. At **$0.1344/GB-month**, this contributes **$0.6720/month** even while its app is stopped. Direct EC2 EBS inventory is empty, which does not remove SageMaker-managed Studio volume billing. Deleting a space deletes its files, so a backup and explicit cleanup decision would be needed. [Studio storage lifecycle](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-running-stop.html)

The domain's idle timeout is 10,080 minutes. No running compute is currently attached, but launching an app under that long idle policy could produce another extended compute charge.

### CloudWatch, KMS, ECR and the sample API

- **CloudWatch** — four Sydney log groups total **0.00777940 GiB of reported stored bytes**, none with retention. A simple byte proxy at **$0.033/GiB-month** gives **$0.00025672/month**, before free allowance and actual compressed-storage metering. No global log groups, metric alarms, composite alarms or dashboards were discovered. Actual October metric-data retrieval and November OTEL ingestion are shown above. Detailed observability is enabled on the endpoint, so extra telemetry usage remains possible without application traffic. The code's EMF path avoids per-inference `PutMetricData`, but log ingestion and distinct custom metric series still have costs.
- **KMS** — one **AWS-managed** S3 key, no customer-managed keys. It has no customer-key monthly fee, while chargeable API usage can still apply. Returned KMS requests are zero-priced so far. The future IaC's customer keys would introduce a different cost profile.
- **ECR** — one repository, **zero image details returned**. Repository existence alone produces no image-storage estimate here. The live endpoint uses AWS's PyTorch DLC repository. Future privately stored image layers cost **$0.10/GiB-month** at the retrieved Sydney rate, plus any applicable scanning, signing or transfer services.
- **API Gateway** — one legacy/example HTTP API targets the `first-web-app` Lambda ARN, while Lambda inventory is empty. This appears to be a stale integration. API Gateway has no always-on instance fee for this configuration, but requests and internet egress can be billed. One historical HTTP request costs **$0.00000129**. The future jobs API uses **REST API pricing**, which is a different meter.

### Present-state per-minute equivalents

| Item | USD/minute equivalent | USD/730-hour month |
| --- | --- | --- |
| One real-time GPU | $0.03052000 | $1,336.776000 |
| Retained Studio volume | $0.0000153425 | $0.672000 |
| S3 completed objects + incomplete parts | $0.0000087275 | $0.382266 |
| Logs stored-byte proxy | $0.000000005861 | $0.00025672 |
| Combined baseline before request/transfer/telemetry extras | $0.03054408 | $1,337.830523 |
| Same retained storage baseline with GPU removed | $0.0000240759 | $1.054523 |

Storage rows are estimates at constant measured sizes. Monthly storage normalization uses **730 hours / 43,800 minutes**. Requests, growth, future training, observability ingestion, credits and taxes are excluded. A smaller baseline would only apply **after** a verified endpoint removal or an implemented async scale-to-zero migration.

## Historical training

The following seven jobs were described individually. Costs below are **reconstructed compute-only list estimates** using each job's reported billable seconds and current **$1.635/GPU-hour** training price. The Cost Explorer training line above is the reported billed aggregate and remains authoritative for that period. A stopped or failed job can incur charges.

| Training job suffix | Status | Reported billable seconds | Compute-only list estimate USD |
| --- | --- | --- | --- |
| 2026-10-22-11-26-27-828 | Failed | 21 | $0.009537 |
| 2026-10-22-11-34-28-261 | Completed | 45947 | $20.867596 |
| 2026-11-09-08-12-00-097 | Stopped | Not reported | Unknown |
| 2026-11-09-08-16-43-699 | Stopped | 6986 | $3.172808 |
| 2026-11-09-11-29-38-779 | Stopped | 126 | $0.057225 |
| 2026-11-09-11-33-29-917 | Completed | 45591 | $20.705913 |
| 2026-11-10-04-34-48-919 | Completed | 45780 | $20.791750 |

An absent `BillableTimeInSeconds` is **unknown**, not a zero-cost assertion. Training volume storage, startup metering, data transfer, logs and historical price timing can prevent exact reconciliation to these reconstructed rows. No currently running training, processing or batch-transform jobs were returned. Training does not have to repeat just to serve the retained trained artifact.

## Optional architecture — services and every cost meter to budget

These costs arise if the code under `services/inference/monitoring/` is deployed. They are separate from the observed running endpoint and historical spend. The [Sydney rate card](aws-cost-2026-11-15/sydney-unit-rates.csv) contains exact SKU, tier start/end, unit, operation, public USD rate and effective date for relevant products retrieved through the AWS Price List API.

| Service / code | Live state | What adds expenditure |
| --- | --- | --- |
| SageMaker GPU inference | One real-time GPU | Provisioned GPU-seconds/hours, fleet overlap, hosting input/output bytes, captured payload S3/logs. Async still bills provisioned GPU time when warm. |
| SageMaker training / Studio | Jobs completed/stopped/failed, retained space | Training instance time, training storage where billed, Studio app time, retained gp3, downloaded data, logs. |
| S3 videos / model / capture / lake / results / quarantine | One existing bucket, future separate buckets absent | GB-month by storage tier, request type, incomplete parts, versions, tags, retrieval/transition/minimum storage-duration charges, internet/cross-service transfer, KMS. Presigned URLs do not remove these fees. |
| Aurora PostgreSQL Serverless v2 | Absent | Writer and failover reader ACU-hours separately, Standard storage and billed I/O, excess backup/snapshot storage, restore/export, logs, data transfer, Data API where applicable. Code minimum is 0.5 ACU **per instance**, not zero. |
| RDS Proxy | Absent | **$0.025/ACU-hour** at underlying Serverless v2 capacity in the catalog, any minimum charge, extra PrivateLink endpoints, data movement. It is not free with Aurora and a reader adds its own database compute. |
| DynamoDB on-demand | Absent | **$0.71/million WRUs**, **$0.1425/million RRUs**, size rounding, strong/eventual/transaction multipliers, GSIs, data storage, PITR **$0.228/GiB-month**, on-demand backups/restores, exports, optional stream consumer charges. TTL is not immediate expiration and its retained bytes persist until deletion. |
| Valkey serverless | Absent | **$0.101/GB-hour** stored, **100MB minimum**, **$0.0027/million ECPUs**, snapshots and networking. Lua rate-limit scripts can use more CPU than a simple GET. Cache failure falls back to billable DynamoDB updates. |
| Lambda | Absent | x86 **$0.0000166667/GB-second** tier1 plus **$0.20/million invocations**, allocated memory, duration, retry/poll calls, extra ephemeral storage, logs, provisioned concurrency only if enabled, VPC service paths. Free GB-seconds and invocations are shared allowances, not multiplied per function. |
| API Gateway jobs API | Legacy HTTP only, production REST absent | Future REST **$3.50/million** first-tier calls versus HTTP **$1.29/million**, status polls, quota requests, upload authorization, payload metering, egress, optional cache. API retries and rejected traffic may still cost money. |
| SQS | Absent | Send/receive/delete/change-visibility, empty receives, retries/DLQ/redrive, 64KiB chunks, KMS. Standard queues have a published free first-million request tier. |
| SNS | Absent | Publish chunks and delivery protocol, retry/DLQ, KMS. Lambda-destination delivery has different pricing from email, HTTPS and SMS. No email/SMS notification integration is confirmed deployed. |
| EventBridge | Absent | Custom result events **$1/million 64KiB chunks**, retries/targets, archive/replay if enabled, scheduler/pipe usage if added. AWS service events are not automatically the same price as custom result events. |
| Step Functions Standard | Absent | **$0.000025/state transition**, including repeated Choice/Wait/Task loops and retries; Lambda/Transcribe/Rekognition remain separate. First 4,000 transitions/month are a shared allowance. |
| Rekognition | No billed line | Six **Group2 DetectModerationLabels** calls/video; borderline full-video analysis **$0.13/video-minute**; retried/duplicate jobs and optional adapters are separate. No custom moderation adapter is used by current code. |
| Transcribe | Inventory denied, no billed line | A language-identification job, then a second toxicity-enabled job for eligible en-US audio. Standard batch **$0.0001/audio-second** in retrieved catalog, toxicity **$0.00006/s** first tier with lower volume tiers. Two passes and input duration matter. |
| GuardDuty malware for S3 | Inventory denied, no billed line | Scanned GB **$0.102/GB** above the first 1 GB, object scan requests **$0.000242/object** above the first 1,000; KMS, S3 tagging/reads, any additional GuardDuty features. Scan only intended upload prefixes to avoid rescanning checked copies. |
| CloudWatch Logs | Four log groups | Ingestion **$0.67/GiB** Standard, stored compressed bytes **$0.033/GiB-month**, Insights **$0.0067/GiB scanned**, repeated stdout, traceback volume and normalized copies, OTEL/X-Ray/Application Signals if enabled. |
| CloudWatch metrics / alarms / dashboard | No alarms/dashboard | Distinct dimension combinations × metric names, **$0.30/metric-month** first tier, **$0.10/standard alarm metric-month**, **$0.50/composite alarm-month**, custom dashboard list fee and API retrieval. A percentile alarm is still billed. Multiple versions/classes create more series. |
| Data Firehose | Inventory denied, no billed line | DirectPut **$0.037/GiB** first tier and source record rounding, transform Lambda, decompression **$0.00415/GiB** only if configured, destination PUT/storage. Current date prefix is timestamp partitioning, not billable dynamic partitioning by itself. |
| Glue Data Catalog | No databases | Catalog object and request allowances, chargeable objects/requests beyond them. Table definitions do not run ETL. Future crawlers and ETL jobs would add DPU-hour meters. |
| Athena | Default primary workgroup only | **$5/TiB scanned**, query minimum/rounding, repeated scans, S3 GET and results, KMS. Workgroup existence and SQL views alone do not reserve compute. Columnar/partition pruning reduces scans. |
| KMS | One AWS-managed key | Future customer-managed keys **$1/key-version/month**, retained/rotated material where billable, symmetric API operations **$0.03/10,000**. Bucket keys reduce some S3 KMS traffic, not the per-key fee. |
| Secrets Manager | Absent | **$0.40/secret-month**, **$0.05/10,000 API calls**, secret versions where applicable, Lambda rotation duration/logs/networking. Client-side caching changes retrieval cost. |
| VPC / PrivateLink | Default VPC, no endpoints/NAT | Four interface services across two AZs in moderated stack = **8 endpoint-AZ hours/hour × $0.013**, plus **$0.01/GiB** first-tier processing. S3/DynamoDB gateway endpoints have no hourly fee. NAT is zero in source IaC; do not add a NAT fee to its estimate. |
| ECR | Empty repository | **$0.10/GiB-month** stored layers; optional scanning/signing and transfer. No ECR storage charge for zero private images was invented. |
| EC2 / EBS / public IPv4 | No live instances, volumes or EIPs returned | Historical usage is listed above. Any future host adds instance, disk/snapshot, IPv4 and transfer meters. Terminated compute does not automatically remove orphaned storage. |
| CloudFront / WAF / Route53 / ALB / ECS | No live CloudFront/WAF/ECS discovered; others not individually inventoried | No billed line in available periods. Not included in source-stack baseline. If hosting moves to them, add requests/bytes, webACL/rules/requests, hosted zones/DNS/domain, load-balancer hours/LCU and task resources as appropriate. |
| IAM / CloudFormation / autoscaling control plane | Metadata or absent | No provisioned compute fee for policy/stack definitions or scaling configuration itself. Resources those definitions create are billable. |
| AWS Support / Marketplace / taxes / commitments | No returned paid fee/commitment line | Actual contract, subscription and tax lines must be added if later applicable. No Savings Plan, reserved capacity, paid support, FX conversion or tax percentage is assumed. |
| Vercel / Neon / GitHub / Stripe | Outside AWS billing scope | App hosting, PostgreSQL/provider, CI/storage and payment processing invoices are external. Their actual plans/usage were not available through AWS. They are **unknown**, not zero or included in this AWS total. |

Current AWS Transcribe documentation says one-second metering with **no minimum duration**. This differs from older 15-second-minimum estimates, so this report does not apply an obsolete minimum. [Current Transcribe pricing](https://aws.amazon.com/transcribe/pricing/). Language checking and toxicity jobs remain separately submitted. The toxicity catalog SKU is modelled as the priced toxicity job, not assumed to be an add-on silently charged twice. Because the project cannot execute a toxicity billing test under its current policy, a first Paid-plan test must confirm whether a standard-transcription line is also emitted for that second job. The production table below discloses the additional-base-pass contingency.

RDS Proxy capacity/minimum behavior should be checked for the selected deployment before accepting a minimum-capacity quote. The published price is tied to underlying ACUs and billable state changes. [RDS Proxy pricing](https://aws.amazon.com/rds/proxy/pricing/). Valkey's storage floor and ECPU metering are documented in [ElastiCache pricing](https://aws.amazon.com/elasticache/pricing/).

## Monitoring-only scenario at one million requests/day

This is a **30-day / 720-hour / 43,200-minute** planning scenario with **30 million requests**, one endpoint/model version, **1,800 bytes/request** plus **5% × 2,200 bytes** for vectors, and two CloudWatch copies if TorchServe prefix normalization is necessary. Combined ingestion is **106.729567 GiB**. Exact payloads, compression, source record rounding and distinct EMF series were not measured on a production fleet. Drift duration assumes efficient window processing; a slow job, repeated listing or large error logs increases this estimate.

| Monitoring component | Monthly USD |
| --- | --- |
| CloudWatch log ingestion | $71.5088 |
| CloudWatch log storage | $3.5221 |
| CloudWatch custom metrics | $12.0000 |
| CloudWatch metric alarms | $1.5000 |
| CloudWatch composite alarms | $1.0000 |
| CloudWatch dashboard | $3.0000 |
| Firehose ingestion | $1.9745 |
| Firehose decompression | $0.2215 |
| Monitoring S3 storage | $0.3750 |
| Monitoring S3 PUT/LIST | $0.5500 |
| Monitoring S3 GET | $0.4400 |
| Normalize/drift/accuracy Lambda | $0.3373 |
| Feedback DynamoDB write units | $0.8520 |
| Feedback DynamoDB reads | $0.0172 |
| Feedback DynamoDB storage/PITR | $0.5130 |
| Athena queries | $1.2500 |
| Monitoring miscellaneous events/catalog | $1.0000 |

**Monitoring-only total — $100.0614/month**, average **$0.00231624/wall-clock minute** under those assumptions. The native Firehose decompression line is a conservative conditional allowance; `delivery.py` currently decompresses in Lambda, so omit that extra line unless native decompression is enabled. This subtotal excludes model GPU time, model training, uploaded video bytes, moderation, production DB/cache/API capacity and the external web host. A previous rough $110–145 monitoring allowance in the repository is not an all-in SaaS budget.

The current EMF dimensions are bounded by endpoint, model version and class, but every distinct combination is still a billable series. User/tenant/request identifiers belong in log fields. HMAC/opaque identifiers do not remove log ingestion costs. Metric series count and ingestion bytes must be measured before replacing these budget allowances with a production forecast. The dashboard allowance uses the published **$3/custom dashboard-month** before applicable free allowances. [AWS dashboard cost reference](https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/monitor-the-solution.html)

## Full architecture scenario at one million uploads/day

**This is a sensitivity model, not a capacity guarantee or a fixed-price quote.** The phrase 'one million users' does not imply one million daily videos. This explicit model uses **one million uploads/day**, **30 seconds/video**, **10MiB/upload**, **80% with audio**, **1% full-video moderation escalation**, six frame checks per video, **20 workflow transitions/upload**, **23 jobs API calls/upload including 20 status polls**, 7-day accepted-video retention and a conservative two-day/two-copy quarantine allowance. It excludes discounts, tax and unverified egress. See the CSV's assumption column for each component.

| Production component | Monthly USD |
| --- | --- |
| Rekognition six-frame image moderation | $70,140.00 |
| Rekognition escalated full-video moderation | $19,500.00 |
| Transcribe language-identification pass | $72,000.00 |
| Transcribe toxicity pass | $16,987.50 |
| GuardDuty scanned video data | $29,882.71 |
| GuardDuty object scan requests | $7,259.76 |
| Step Functions moderation | $15,000.00 |
| S3 accepted videos, seven days | $1,691.82 |
| S3 quarantine two-day allowance | $976.56 |
| S3 results and lake allowance | $2.50 |
| S3 upload/copy/result PUT | $825.00 |
| S3 object reads/head/tag checks | $132.00 |
| API Gateway REST submissions/status | $2,415.00 |
| Jobs API Lambda | $425.50 |
| Moderation frame extraction Lambda | $1,506.00 |
| Other workflow Lambda | $155.00 |
| DynamoDB API/job reads | $196.65 |
| DynamoDB writes and indexes | $340.80 |
| DynamoDB job/key storage and PITR | $25.65 |
| SQS standard operations | $35.60 |
| SNS completion publications | $29.50 |
| EventBridge result bus | $30.00 |
| Aurora minimum writer+reader | $144.00 |
| RDS Proxy minimum-capacity illustration | $18.00 |
| Aurora storage | $2.20 |
| Aurora billed I/O | $66.00 |
| Aurora Data API moderation calls | $75.60 |
| Aurora excess backup storage allowance | $0.46 |
| Valkey minimum storage | $7.27 |
| Valkey request processing | $5.59 |
| PrivateLink four services, two AZs | $74.88 |
| PrivateLink processing allowance | $1.00 |
| Customer-managed KMS keys | $16.00 |
| KMS symmetric API allowance | $180.00 |
| Secrets Manager secret storage | $1.20 |
| Secrets Manager retrieval allowance | $5.00 |
| Monitoring subtotal | $100.06 |

**Subtotal excluding GPU inference — $240,254.82/30-day month**, average **$5.561454/wall-clock minute**. This includes the monitoring subtotal once. Rejected uploads may avoid GPU compute but still incur upload, malware and image checks. The scenario assumes all uploads progress for accepted-storage/GPU sizing, so it deliberately does not subtract hypothetical rejection savings.

Audio uses **720,000,000.0 seconds** for the language pass and the same amount for the toxicity-job scenario. If the toxicity-enabled job also produces a separate standard batch charge in a verified first bill, add **$72,000.00/month** for that second standard pass. Non-English, no-audio, blocked-before-audio and failed jobs change actual usage. Do not base a production price promise on the lower modeled audio total until that billing path is tested.

Database and cache rows are **capacity floors/allowances**, not measured production sizing. With both Aurora instances' configured maximum of 16 ACU, database compute can rise to **$4,608.00/30-day month**, before proxy, storage and I/O. The database is provisioned with writer+reader minima and does not auto-pause at the code's 0.5 ACU minimum. Backups above any included storage, restore tests, persistent manual snapshots, deletion workflows and prolonged audit retention require extra budgets.

Even without video traffic, the optional core's modeled minima are **$264.7430/730-hour month**, or **$0.00604436/minute equivalent**, from an aggregate 1 Aurora ACU, proxy at that capacity, 100 MB of Valkey, 8 interface endpoint-AZs, 16 customer keys and 3 secrets. This excludes database bytes/I/O, monitoring, GPU, API traffic, rotation, backup and any applicable proxy minimum beyond the modeled ACU. None of this optional core is presently deployed. The Aurora Data API has its own **$0.42/million 32 KiB request units** first tier in Sydney, beyond the SQL storage/I/O costs. Excess Aurora backup is **$0.023/GiB-month**; restore and snapshot-export usage should be priced separately when scheduled. [Aurora pricing and Data API metering](https://aws.amazon.com/rds/aurora/pricing/)

### GPU throughput sensitivity

For concurrency 1 and 70% target utilization, required GPUs are `ceil(arrivals_per_second × mean_GPU_service_seconds / 0.70)`. These service times are **hypothetical benchmarks**. A30-second input video does not establish 30 seconds of GPU work.

| Mean GPU service time | Concurrent jobs/GPU | Required GPUs | GPU/month USD | Including scenario USD |
| --- | --- | --- | --- | --- |
| 2s | 1 | 34 | $44,827.78 | $285,082.60 |
| 10s | 1 | 166 | $218,865.02 | $459,119.85 |
| 30s | 1 | 497 | $655,276.61 | $895,531.43 |

No test has demonstrated those throughputs or obtained those GPU quotas/capacity. The source async config defaults to `ASYNC_MAX_INSTANCES=1`, `max_concurrent_invocations_per_instance=1`, while the jobs REST API default throttle is 100 requests/second. The polling scenario above averages **266.204 API requests/second**, exceeding that default. Those settings must be revisited and load-tested before serving this workload. With sustained traffic, async cannot magically remove the busy fleet cost.

### Important amounts still outside the scenario

- **Internet/data egress** — at 10 MiB, the scenario accepts **292,968.750 GiB/month** of uploaded video. Upload ingress can be free while later viewing/downloads are chargeable. Playback fraction, repetitions, destination and provider egress are unknown. Calculate `actual chargeable GiB in each tier × that route's regional rate`, after shared allowances. Do not equate every uploaded byte with an internet download.
- **CloudWatch and detailed telemetry outside EMF** — stdout/debug traces, OTEL data already seen in the ledger, service logs, API reads and query scan volume are extra when they exceed the scenario allowance.
- **Aurora backups, restores, SQL load and audit history** — read replica usage, DB I/O, WAL churn, snapshots and audit retention require measurements. Lambda memory/timeouts are limits, not actual durations.
- **Retry/abuse amplification** — duplicate jobs, failed paid moderation calls, repeated polling, SQS redrive, cache outage fallback, poison messages, multipart chunks and account/key registration traffic add meters.
- **KMS/Secrets overhead** — service caching and S3 Bucket Keys determine call counts. Annual key rotation can add billable retained material. Rotation's Lambda and VPC calls are additional. The16-key scenario is a source-level budget, not a deployed resource count.
- **Data lifecycle delay and versions** — TTL/S3 lifecycle are asynchronous. Versioned overwrites, retention holds, Parquet exports, lake-year retention and restore drills can add bytes beyond the steady-state assumptions.
- **External providers and taxes** — actual Vercel/Neon/payment/domain/support invoices, discounts, credit eligibility and tax depend on the real commercial arrangements. None was fabricated as an AWS charge.

## Cost reduction decisions supported by this audit

1. **Review the running GPU first.** For unattended demo use, a scheduled demo window or a verified async migration has the largest immediate effect. Avoiding 24 provisioned GPU hours saves **$43.9488 gross compute** at this snapshot's rate. Preserve artifacts/config before any separately authorized removal and confirm the endpoint is absent or async capacity is zero afterward. No resources were removed here.
2. **Address retained storage with an explicit data decision.** The incomplete uploads can be aborted after confirming no upload process is active. Add an abort-incomplete-upload lifecycle rule to prevent recurrence. Preserve trained artifacts and needed MELD data. Back up Studio files before removing its space. These actions would remove the small recurring costs identified above, not recover historical charges.
3. **Keep the full architecture opt-in while measuring demand.** Its two Aurora instances, proxy, Valkey, customer KMS keys and interface endpoints impose a baseline even at low traffic. The current web app already targets PostgreSQL/Neon, so Aurora is not a prerequisite for keeping the current UI running. Do not deploy duplicate database infrastructure solely to make diagrammed services exist.
4. **Price moderation into the product.** Track image checks, audio seconds, upload GiB and escalation rate per opaque tenant. The existing fail-closed checks should not be disabled just to meet a lower estimate. Paid/advanced service eligibility must be resolved before this path can run in the current AWS experience.
5. **Reduce polling after correctness testing.** Status polling creates API, Lambda, DynamoDB and cache calls. Backoff, an event-driven notification path, idempotency and bounded retries can lower the multiplicative load. The code's completion SNS topic does not establish that end-user notifications are integrated.
6. **Use measured GPU cost per successful request.** Benchmark clip-length cohorts, concurrency, memory, cold starts and failure rate. Serverless CPU inference is not a drop-in GPU replacement; the multimodal model needs a measured memory/latency/throughput fit. Async can release idle GPU capacity but introduces queue/cold-start time and S3/worker costs. [SageMaker deployment modes](https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model-options.html)
7. **Bound monitoring growth.** Set explicit log retention, cap class/model dimensions, sample embeddings and use S3 lifecycle plus Parquet/date/tenant pruning. EMF removes per-request metric API calls but retains metric and log costs. Do not disable alarm coverage to force the monitoring estimate lower.
8. **Use the project owner's billing controls.** Inspect **AWS Settings → Billing** for credits and plan/spend status, and the Billing and Cost Management console for budgets. Confirm the assigned Region under **AWS Settings → View all projects → Overview → Additional Info → Region**. Paid-plan/advanced-feature changes, budgets and spend limits were not modified during the audit.

## Audit overhead and verification

This audit made **3 Cost Explorer GetCostAndUsage page requests**, with a published list cost of **$0.03** at $0.01/page, before credit/plan handling. Results were cached locally instead of re-querying to format the report. The inventory's S3 LIST/HEAD-style requests and CloudWatch statistics request can also consume existing request allowances or incur small request charges. These audit-generated costs may appear after the billing snapshot and are not asserted to be included in the historical ledger. Public Price List queries have no quoted per-query fee in this calculation. [Cost Explorer API pricing](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/pricing/)

Verification performed:

- Asserted the signed-in backing project identity before inventory and pricing reads.
- Pulled GitHub `main` with a fast-forward update to 7275ff7 and inspected current deployment, inference telemetry, moderation, data pipeline and IaC conventions.
- Read live endpoint/config/instance count, scaling targets, Studio apps/spaces/domain, all seven training jobs, S3 completed versions and incomplete parts, log retention/bytes, KMS key management type, ECR images and the API integration.
- Inspected Sydney resource inventories and global CloudFront/WAF/CloudWatch Logs where applicable. Recorded SCP-denied services explicitly. A missing paginator was corrected with direct calls for the small list responses; only successful reads establish absence.
- Reconciled daily usage sums to independently grouped monthly gross values to within $0.000001, using Python Decimal. Preserved credit/refund treatment separately and did not add incompatible usage units.
- Selected public price SKUs by Sydney region and exact usage/operation. Hosting and training `ml.g5.xlarge` prices were queried separately. Notebook prices were not substituted for hosting.
- Kept original downloaded billing/resource evidence outside the repository. Published only sanitized financial summaries and calculations. No credentials, raw access tokens, email addresses or S3 object-level identifiers were added to the report.

Limitations — historical resource-level billing is not enabled/queried, invoices and external provider accounts were not retrieved, denied inventories remain unknown, retained storage is a point-in-time listing rather than a transactionally consistent snapshot, and production service times/usage distributions are not measured. The current-day bill is incomplete. No cloud infrastructure, endpoints, retention policies or billing plan were changed. No GitHub push was performed.

## Supporting files

| File | Contents |
| --- | --- |
| [daily-service-usage.csv](aws-cost-2026-11-15/daily-service-usage.csv) | Every returned daily service/usage row, with original decimal cost, quantity, unit and estimated flag |
| [daily-totals.csv](aws-cost-2026-11-15/daily-totals.csv) | Gross usage totals by UTC day |
| [monthly-service-credits.csv](aws-cost-2026-11-15/monthly-service-credits.csv) | Monthly service and record-type ledger, including credits and tax |
| [monthly-usage-types.csv](aws-cost-2026-11-15/monthly-usage-types.csv) | Unit-preserving monthly aggregation of each usage type |
| [storage-prefixes.csv](aws-cost-2026-11-15/storage-prefixes.csv) | Completed object counts/bytes and prefix-level list-price storage estimate |
| [training-jobs.csv](aws-cost-2026-11-15/training-jobs.csv) | Job status, reported billable seconds, reconstructed compute estimates |
| [sydney-unit-rates.csv](aws-cost-2026-11-15/sydney-unit-rates.csv) | Relevant public on-demand SKUs with volume tiers and effective dates |
| [monitoring-scenario.csv](aws-cost-2026-11-15/monitoring-scenario.csv) | Detailed monitoring quantity/cost/per-minute assumptions |
| [production-scenario-excluding-gpu.csv](aws-cost-2026-11-15/production-scenario-excluding-gpu.csv) | Per-component full-stack quantities and costs, GPU excluded |
| [gpu-throughput-sensitivity.csv](aws-cost-2026-11-15/gpu-throughput-sensitivity.csv) | Hypothetical mean service times and required fleet cost |
| [inventory-summary.json](aws-cost-2026-11-15/inventory-summary.json) | Sanitized observed resource snapshot and explicit visibility limits |
| [calculated-summary.json](aws-cost-2026-11-15/calculated-summary.json) | Deterministically calculated headline values |
| [validate.py](aws-cost-2026-11-15/validate.py) | Offline Decimal checks for ledger reconciliation, quantities, rate arithmetic and scenario totals |

Run `python docs/reports/aws-cost-2026-11-15/validate.py` from the repository root to validate the exported figures without contacting AWS.

All files are a dated audit. Refresh live identity, resource state, service eligibility and the price catalog before making a new production spending commitment.
