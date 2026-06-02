---
title: Portfolio Tracker
slug: /
---

# Portfolio Tracker

Portfolio Tracker is a read-only personal portfolio tracking system. It imports investment activity and market data, computes auditable metrics, and presents descriptive insights.

The product boundary is intentionally narrow:

- It does not provide financial advice.
- It does not recommend buying, selling, holding, rebalancing, or trading.
- It does not execute trades, route orders, move money, custody assets, or behave as a brokerage.
- It shows `Pending` or `Partial` states when source records or market data are incomplete.

## What The System Does

- Imports statements, trade confirmations, and market data.
- Stores normalized financial activity by user and portfolio.
- Computes descriptive metrics with auditable breakdowns.
- Presents dashboards through mobile, web, and API surfaces.
- Supports a local AI chat boundary for descriptive portfolio questions only.

## Repository Ecosystem

| Repository | Purpose |
|------------|---------|
| `portfolio-architect` | Project state, ADRs, specs, Work Items, version manifest, and framework memory |
| `portfolio-api` | Backend API for auth, imports, calculations, data access, and descriptive chat boundaries |
| `portfolio-mobile` | Expo app for Android, iOS, and web dashboard experiences |
| `portfolio-db` | Database migrations, seeds, backup/restore scripts, and schema ownership |
| `portfolio-infrastructure` | Local Docker Compose orchestration and platform services |
| `portfolio-docs` | Public-facing documentation |

## Documentation Scope

This public documentation describes the architecture, workflows, and safety posture at a high level. Internal runbooks, secrets, private infrastructure details, and user financial data are intentionally excluded.
