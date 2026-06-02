---
title: Integration Points
---

# Integration Points

Portfolio Tracker has a small set of integration boundaries.

## API

The API exposes authenticated portfolio, dashboard, data, import, auth, and descriptive chat capabilities. API contracts are versioned internally and should remain stable unless a Work Item explicitly coordinates affected clients.

Representative API areas:

- Authentication and development auth helper
- Portfolio selection
- Dashboard summary and metric breakdowns
- Paginated raw transaction/data views
- Source import workflows
- Descriptive chat sessions and messages
- Health and API documentation endpoints

## Mobile/Web Client

The Expo app consumes API contracts and renders:

- Login
- Dashboard
- Data tables
- Metric breakdowns
- Holdings
- Liquidations
- Settings and error states

The mobile app does not connect directly to PostgreSQL, local LLM services, embeddings, provider infrastructure, or market data providers.

## Database

PostgreSQL stores users, sessions, portfolios, broker accounts, source documents, transactions, holdings snapshots, statement snapshots, market daily closes, closed positions, and chat records.

Security-sensitive rows are scoped by `user_id` and `portfolio_id`.

## Local Infrastructure

Local infrastructure orchestrates development services through Docker Compose. Public documentation intentionally omits private local IP addresses, secret values, and private tunnel hostnames.

## AI Chat Boundary

The chat boundary is descriptive-only. It uses capped sanitized context, blocks prescriptive trading requests before provider calls where possible, and must not expose prompts, full responses, secrets, full account numbers, or financial PII in logs or public docs.
