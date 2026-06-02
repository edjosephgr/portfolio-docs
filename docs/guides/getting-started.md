---
title: Getting Started
---

# Getting Started

This public guide explains the ecosystem at a high level. Internal setup details, local secrets, private URLs, and machine-specific network values live in the private operational repos.

## Recommended Reading Order

1. Read [System Overview](../architecture/system-overview.md).
2. Read [Data Flow](../architecture/data-flow.md).
3. Read [Security Overview](../security/security-overview.md).
4. Read [Framework Workflow](../architecture/framework-workflow.md).
5. Use the repo-specific README in the relevant active repo for local development.

## Development Overview

- API development happens in `portfolio-api`.
- Mobile/web development happens in `portfolio-mobile`.
- Database schema work happens in `portfolio-db`.
- Local platform orchestration happens in `portfolio-infrastructure`.
- Governance, specs, Work Items, ADRs, and Skills live in `portfolio-architect`.
- Public documentation lives in `portfolio-docs`.

## Change Workflow

Every substantial change starts from a governed local Work Item with a GitHub issue reference. Public documentation changes also need Work Item traceability when they alter architecture, security, compliance, workflow, or published project state.

## Validation Overview

Validation depends on the affected repo. Common checks include linting, tests, builds, documentation build, and `git diff --check`.
