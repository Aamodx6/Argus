"""Validate this dated financial snapshot offline with Python's standard library."""
import collections
import csv
from decimal import Decimal as D, ROUND_CEILING
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
TOLERANCE = D('0.000001')


def rows(name):
    with (ROOT / name).open(encoding='utf-8', newline='') as handle:
        return list(csv.DictReader(handle))


def close(left, right):
    assert abs(left - right) <= TOLERANCE, f'{left} != {right}'


def main():
    summary = json.loads((ROOT / 'calculated-summary.json').read_text())
    inventory = json.loads((ROOT / 'inventory-summary.json').read_text())
    daily = rows('daily-service-usage.csv')
    monthly = rows('monthly-service-credits.csv')
    daily_by_month = collections.defaultdict(lambda: D(0))
    monthly_by_month = collections.defaultdict(lambda: D(0))
    totals_by_day = collections.defaultdict(lambda: D(0))
    for row in daily:
        assert row['usage_unit'] != 'NA', 'Mixed usage units must not be aggregated'
        value = D(row['unblended_cost_usd'])
        daily_by_month[row['date_utc'][:7]] += value
        totals_by_day[row['date_utc']] += value
        assert row['credits_refunds_excluded'] == 'True'
    for row in monthly:
        if row['record_type'] not in ['Credit', 'Refund']:
            monthly_by_month[row['month']] += D(row['unblended_cost_usd'])
    assert set(daily_by_month) == set(monthly_by_month)
    for month in monthly_by_month:
        close(daily_by_month[month], monthly_by_month[month])
    for row in rows('daily-totals.csv'):
        close(totals_by_day[row['date_utc']], D(row['gross_cost_usd']))
    close(sum(monthly_by_month.values()), D(summary['all_available_gross_usd']))
    close(sum(D(row['unblended_cost_usd']) for row in monthly if row['record_type']=='Credit'),
          D(summary['all_available_credits_usd']))
    assert len(daily) == summary['csv_daily_rows']
    exports = rows('storage-prefixes.csv')
    assert sum(int(row['bytes']) for row in exports) == inventory['s3_current_bytes']
    assert sum(int(row['objects']) for row in exports) == inventory['s3_current_objects']
    prices = rows('sydney-unit-rates.csv')
    assert all(row['usage_type'].startswith(('APS2-', 'ap-southeast-2-')) for row in prices)
    host_price = next(D(row['usd_per_unit']) for row in prices
                      if row['service_code']=='AmazonSageMaker' and row['usage_type']=='APS2-Host:ml.g5.xlarge')
    close(host_price, D(summary['host_hourly_usd']))
    close(host_price/60, D(summary['host_minute_usd']))
    close(host_price*24, D(summary['host_daily_usd']))
    close(host_price*730, D(summary['host_730h_usd']))
    close(D(inventory['remaining_credits_usd'])/host_price, D(summary['remaining_credit_gpu_hours']))
    for name, field in [('monitoring-scenario.csv','monitoring_scenario_monthly_usd'),
                        ('production-scenario-excluding-gpu.csv','production_scenario_excluding_gpu_usd')]:
        scenario = rows(name)
        close(sum(D(row['monthly_usd']) for row in scenario), D(summary[field]))
        for row in scenario:
            close(D(row['monthly_usd'])/43200, D(row['average_usd_per_wall_minute']))
    for row in rows('gpu-throughput-sensitivity.csv'):
        required = (D(30_000_000)/(30*86400)*D(row['mean_gpu_seconds'])/D(row['target_utilization']))
        assert int(row['required_instances']) == int(required.to_integral_value(rounding=ROUND_CEILING))
        close(D(row['required_instances'])*720*host_price, D(row['gpu_monthly_usd']))
        close(D(row['gpu_monthly_usd'])+D(summary['production_scenario_excluding_gpu_usd']),
              D(row['total_scenario_usd']))
    for row in rows('training-jobs.csv'):
        for key in ['start_utc','end_utc']:
            assert not row[key] or row[key].endswith('+00:00')
        if row['billable_seconds']=='':
            assert row['compute_list_estimate_usd']=='', 'Unknown billable time must not become a zero estimate'
    report = ROOT.parent / 'aws-cost-analysis-2026-11-15.md'
    body = report.read_text(encoding='utf-8')
    for target in re.findall(r'\]\(([^)]+)\)', body):
        if not target.startswith(('https://','http://','#')):
            assert (report.parent / target).exists(), f'Broken supporting file link: {target}'
    assert money(D(summary['production_scenario_excluding_gpu_usd'])) in body
    assert 'AKIA' not in body and 'ASIA' not in body
    reduction_path = ROOT / 'optimization-result.json'
    if reduction_path.exists():
        reduction = json.loads(reduction_path.read_text())
        assert reduction['endpoint_removed'] and reduction['remaining_endpoint_count'] == 0
        assert reduction['remaining_incomplete_uploads'] == 0
        assert reduction['completed_s3_objects'] == inventory['s3_current_objects']
        assert reduction['completed_s3_bytes'] == inventory['s3_current_bytes']
        assert reduction['model_archive_etag_unchanged']
        assert reduction['lifecycle_abort_after_days'] == 7
        assert reduction['studio_default_idle_minutes'] == 60
        close(D(reduction['gpu_730h_charge_avoided_usd']), host_price*730)
        idle = sum(D(reduction[field]) for field in ['s3_monthly_estimate_usd',
            'studio_monthly_estimate_usd','log_storage_monthly_proxy_usd'])
        close(idle, D(reduction['remaining_idle_monthly_estimate_usd']))
        close(D(reduction['comparable_before_idle_monthly_estimate_usd'])-idle,
              D(reduction['avoided_monthly_charge_usd']))
        close(D(reduction['removed_stale_bytes'])/(D(1024)**3)*D('.025'),
              D(reduction['multipart_storage_monthly_charge_avoided_usd']))
        reductions_report = ROOT.parent / 'aws-cost-reductions-2026-11-15.md'
        for target in re.findall(r'\]\(([^)]+)\)', reductions_report.read_text(encoding='utf-8')):
            if not target.startswith(('https://','http://','#')):
                assert (reductions_report.parent / target).exists(), target
        print('Validated cleanup evidence, unchanged completed objects, remaining idle costs and avoided charges.')
    print(f'Validated {len(daily)} billing rows, ledger reconciliation, retained bytes, '
          'Sydney rates, GPU arithmetic, both scenarios, UTC timestamps and report links.')


def money(value):
    return f'${value:,.2f}'


if __name__ == '__main__':
    main()
