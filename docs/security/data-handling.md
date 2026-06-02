---
title: Data Handling
---

# Data Handling

Portfolio Tracker stores financial activity to compute descriptive, auditable portfolio metrics.

## Data Categories

| Category | Examples | Public handling |
|----------|----------|-----------------|
| User identity | Email, auth identifiers, session records | Do not publish real values |
| Portfolio ownership | `user_id`, `portfolio_id` | Discuss only as scoping concepts |
| Broker account references | Redacted account number, hash, encrypted value | Never publish full account numbers or real hashes |
| Source documents | Statements, trade confirmations, import metadata | Discuss types, not contents |
| Transactions | Dates, operations, tickers, amounts, descriptions | Publish only anonymized examples |
| Market data | Ticker, date, close, adjusted, source | Public concept, no proprietary dumps |
| Chat records | Sessions and messages | Do not publish prompts or full AI responses |

## Account Number Rules

- Full account numbers are not primary keys.
- UI/API display uses redacted account numbers.
- Hashes or encrypted values are used only when necessary.
- Public docs must not include full account numbers, hashes, or encrypted account values.

## Market Data Rules

Market data stores adjusted daily close rows only:

- `ticker`
- `date`
- `close`
- `adjusted`
- `source`

If market data is missing, product behavior should surface `Pending`.

## AI Context Rules

Descriptive chat context is capped and sanitized. The system must avoid exposing prompts, full AI responses, secrets, tokens, full account numbers, or financial PII.
