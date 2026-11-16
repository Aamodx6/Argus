# Financial dashboard

A standalone financial benchmarking dashboard with an orange/charcoal palette on a light canvas. It contains a nine-chart overview, AWS expenditure analysis, and an illustrative user-scale model.

## Run locally

Requires Node.js 22.12+ or a supported newer release and npm.

From this folder:

    npm ci
    npm run dev

## Build

    npm run build

Open dist/index.html directly for the offline dashboard. The build embeds its JavaScript, styles and bundled CSV snapshot into the HTML. The public source files are copied beside it for the audit and plan-source links.

## Checks

    npm run check

Checks use Playwright with Microsoft Edge installed. They verify the overview, routes, currencies, tooltips, AWS totals, responsive layouts and large-bar bounds. Screenshots are generated in .artifacts/.

## Data and assumptions

- src/data/ contains the CSV snapshots, sources, units, reporting periods and verification status.
- Financial inputs are USD, with INR comparison values at the stamped RBI/FBIL rate.
- AWS gross usage, credits and post-cleanup estimates have separate labels and bases.
- Scale profiles and processing-speed selections are illustrative assumptions. They do not establish measured throughput or demand.
- src/scenarios.js defines the selectable scenarios.
- src/config.js defines the overview cards and sidebar entries.
- Original local-file URLs in historical CSV rows identify supplied research evidence. Current public source links and bundled files are used by the chart interface.

## Structure

This folder has its own npm manifest, lockfile, source, public files and tests. Its build and checks operate within this folder. The existing application entry points and repository workflows do not need changes.

The existing published dashboard is at https://verdhanyash.github.io/sentiment-intelligence-dashboard/.
