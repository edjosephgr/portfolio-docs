---
title: Compliance Posture
---

# Compliance Posture

Portfolio Tracker is built around financial and personal data handling controls. It is not a brokerage, custodian, trading venue, or financial advisor.

## Applicable Frameworks

| Framework | Current relevance |
|-----------|-------------------|
| SOC 2 | Security, availability, change control, auditability, and least privilege |
| GDPR / PII | Data minimization, user data handling, deletion concepts, and privacy posture |
| OWASP Top 10 | Web/API security controls, auth boundaries, input validation, and logging hygiene |

PCI-DSS and HIPAA are not current target frameworks because the product does not process card payments or health data.

## Product Boundary

Portfolio Tracker is read-only:

- No recommendations
- No financial advice
- No trade execution
- No order routing
- No custody
- No money movement
- No brokerage behavior

## Auditability

Auditability comes from:

- Spec Kit Work Items
- GitHub issues and Project fields
- PRs and Conventional Commits
- ADRs
- Changelogs
- Metric breakdowns in product behavior

## Public Documentation Requirements

Public-facing documentation must remain sanitized. If a change affects public architecture or security posture, update this repo alongside internal memory.
