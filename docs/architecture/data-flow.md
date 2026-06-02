---
title: Data Flow
---

# Data Flow

Portfolio Tracker imports source records, normalizes them by user and portfolio, computes descriptive metrics, and presents auditable results.

```mermaid
sequenceDiagram
  participant User
  participant Mobile as Mobile/Web App
  participant API as API
  participant DB as PostgreSQL
  participant Market as Market Data
  participant Chat as Descriptive Chat Boundary

  User->>Mobile: Sign in and select portfolio
  Mobile->>API: Request dashboard or data
  API->>DB: Query rows scoped by user_id and portfolio_id
  API->>Market: Read adjusted daily closes when needed
  API->>API: Compute descriptive metrics and audit breakdowns
  API-->>Mobile: Return dashboard, data, Pending or Partial states
  User->>Mobile: Ask descriptive portfolio question
  Mobile->>API: Submit chat request
  API->>DB: Build capped sanitized context
  API->>Chat: Send descriptive-only context
  Chat-->>API: Return descriptive response
  API-->>Mobile: Stream sanitized response
```

## Source Inputs

- Statements
- Trade confirmations
- Normalized transaction rows
- Statement snapshots
- Adjusted daily market close rows

## Output Semantics

- Important metrics include auditable breakdowns.
- Missing source data does not silently fall back to unrelated periods.
- Missing market data appears as `Pending`.
- Partial source coverage appears as `Partial` when applicable.

## Data Minimization

The system stores and exposes only what is needed to support portfolio tracking and auditability. Public docs do not include real user data, full account numbers, or sensitive identifiers.
