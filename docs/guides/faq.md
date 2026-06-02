---
title: FAQ
---

# FAQ

## Is Portfolio Tracker a brokerage?

No. It is a read-only tracker. It does not execute trades, route orders, custody assets, move money, or provide brokerage behavior.

## Does Portfolio Tracker give financial advice?

No. Insights are descriptive, not prescriptive. The product must not recommend buying, selling, holding, trading, or rebalancing.

## What happens when data is missing?

The product should show `Pending` or `Partial` states rather than invent values or silently fall back to unrelated periods.

## Where is the source of truth?

`portfolio-architect` owns project state, ADRs, specs, Work Items, version manifest, and framework memory. `portfolio-docs` is the public documentation surface.

## Can public docs show real sample account numbers?

No. Public docs must not show full account numbers, real account hashes, encrypted account values, financial PII, prompts, full AI responses, tokens, secrets, private URLs, or internal IPs.

## Why does the project use multiple repos?

The separation keeps product behavior, mobile UI, database schema, infrastructure, governance, and public documentation in clear ownership boundaries.
