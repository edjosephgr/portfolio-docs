# Portfolio Tracker Public Documentation

Public documentation for Portfolio Tracker, a read-only personal portfolio tracker that imports investment activity and market data, computes auditable metrics, and presents descriptive insights.

Portfolio Tracker does not provide financial advice, recommendations, trade execution, order routing, custody, brokerage behavior, or money movement.

## Documentation Site

This repo uses Docusaurus and Markdown.

```powershell
npm install
npm run start
npm run build
```

## Published Sections

- Architecture overview
- Data flow
- Integration points
- Security overview
- Data handling
- Compliance posture
- Getting started
- FAQ
- Glossary
- Roadmap
- Framework workflow and Skills model

## Public Safety Boundary

This repo is public-facing. Do not publish:

- Secrets, API keys, tokens, credentials, or `.env` values
- Full account numbers, financial PII, prompts, or full AI responses
- Internal IPs, private URLs, or unresolved vulnerability details
- Implementation details that materially facilitate attacks

Internal operational state remains in `portfolio-architect`.

## Related Repos

| Repository | Purpose |
|------------|---------|
| `portfolio-architect` | Project state, ADRs, specs, Work Items, and framework memory |
| `portfolio-api` | Backend API, auth, imports, calculations, and chat boundaries |
| `portfolio-mobile` | Expo mobile/web client |
| `portfolio-db` | SQL migrations, seeds, and database operational scripts |
| `portfolio-infrastructure` | Local Docker Compose orchestration and platform services |

## AI Agent Guidance

AI-agent rules live in `AGENTS.md`. Substantial changes require a Work Item in `portfolio-architect/specs/*/tasks.md` and a GitHub Work Item issue in `Ready` status.
