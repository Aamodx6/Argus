const setup = `$ErrorActionPreference = 'Stop'
if ($env:ARGUS_API_KEY -notmatch '^[A-Za-z0-9_-]{32,128}$') {
  throw 'Set ARGUS_API_KEY to your Argus API key.'
}
$curl = (Get-Command curl.exe, curl -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1).Source
if (!$curl) { throw 'Install curl to run this example.' }
$file = Get-Item -LiteralPath $Video
$extension = $file.Extension.ToLowerInvariant()
if ($file.PSIsContainer -or $file.Length -lt 1 -or $file.Length -gt 128MB) {
  throw 'Choose a video between 1 byte and 128 MiB.'
}
$auth = 'header = "Authorization: Bearer ' + $env:ARGUS_API_KEY + '"'

function Invoke-ArgusCurl {
  param([string]$Path, [hashtable]$Data)

  $options = @()
  if ($null -ne $Data) {
    $json = ConvertTo-Json -InputObject $Data -Compress
    $options = @('--header', 'Content-Type: application/json', '--data-raw', $json)
  }
  $response = $auth | & $curl --config - --silent --show-error --fail-with-body --max-time 100 @options "$baseUrl$Path"
  if ($LASTEXITCODE -ne 0) { throw "Argus request failed ($Path). $response" }
  $response | ConvertFrom-Json
}

function Send-Video {
  param([string]$Url, [string[]]$Options)

  & $curl --silent --show-error --fail --max-time 300 @Options $Url | Out-Null
  if ($LASTEXITCODE -ne 0) { throw 'Video upload failed.' }
}`;

const synchronous = `if ($extension -notin '.mp4', '.mov', '.avi') { throw 'Choose an MP4, MOV or AVI video.' }

$upload = Invoke-ArgusCurl '/api/upload-url' @{ fileType = $extension }
Send-Video $upload.url @('--request', 'PUT', '--header', "Content-Type: $($upload.contentType)", '--data-binary', "@$($file.FullName)")
$result = Invoke-ArgusCurl '/api/sentiment-inference' @{ key = $upload.key }
ConvertTo-Json -InputObject $result.analysis -Depth 30`;

const asynchronous = `if ($extension -ne '.mp4') { throw 'Choose an MP4 video.' }

$upload = Invoke-ArgusCurl '/api/async-inference/uploads' @{}
if ($upload.fields) {
  $options = foreach ($field in $upload.fields.PSObject.Properties) {
    '--form-string', "$($field.Name)=$($field.Value)"
  }
  $options += @('--form', ('file=@"' + $file.FullName.Replace('\\', '/') + '";type=video/mp4'))
} else {
  $options = @('--request', 'PUT', '--data-binary', "@$($file.FullName)")
  $options += foreach ($header in $upload.headers.PSObject.Properties) {
    '--header', "$($header.Name): $($header.Value)"
  }
}
Send-Video $upload.url $options

$job = Invoke-ArgusCurl '/api/async-inference/jobs' @{ upload_id = $upload.upload_id }
$jobPath = "/api/async-inference/jobs/$($job.job_id)"
Write-Host "Job $($job.job_id)"
$deadline = (Get-Date).AddMinutes(5)
do {
  $result = Invoke-ArgusCurl $jobPath
  if ($result.status -eq 'SUCCEEDED') {
    ConvertTo-Json -InputObject $result.analysis -Depth 30
    return
  }
  if ($result.status -in 'FAILED', 'REVIEW') { throw "Job $($job.job_id) status is $($result.status)." }
  Start-Sleep -Seconds 5
} while ((Get-Date) -lt $deadline)
throw "Job $($job.job_id) is still processing."`;

export function sentimentApiCurlExample(origin, guarded) {
  const baseUrl = `$baseUrl = '${origin.replaceAll("'", "''")}'`;
  return `param([Parameter(Mandatory)][string]$Video)\n\n${baseUrl}\n${setup}\n\n${guarded ? asynchronous : synchronous}\n`;
}
