---
title: Security Overview
---

# Security Overview

Portfolio Tracker handles financial and personal data, so the public security posture emphasizes least privilege, data minimization, auditable access boundaries, and sanitized logging.

## Security Principles

- Scope sensitive data by authenticated user and portfolio.
- Never use a broker account number as a primary key.
- Never expose full account numbers in UI, API responses, logs, prompts, or public docs.
- Store refresh tokens hashed.
- Keep secrets in environment-specific secret stores, never in source control.
- Keep local-only development helpers disabled outside local development.
- Prefer explicit `Pending` or `Partial` states over invented financial data.

## Public Disclosure Boundary

This documentation intentionally does not publish:

- Secret values or token formats beyond high-level concepts
- Private hostnames or local network details
- Full vulnerability findings
- Prompt bodies or full AI responses
- Real account numbers, financial PII, or user records

## Quality And Validation

The project uses repo-specific validation such as linting, tests, builds, dependency audits, and local quality gates where available. Hosted CI does not assume access to local developer machines or private local services.
