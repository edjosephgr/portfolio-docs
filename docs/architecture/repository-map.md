---
title: Repository Map
---

# Repository Map

| Repository | Status | Public Role |
|------------|--------|-------------|
| `portfolio-architect` | Active | Internal source of truth for project state, specs, ADRs, Work Items, and version alignment |
| `portfolio-api` | Active | Backend API for authentication, imports, calculations, dashboard data, raw data, and descriptive chat |
| `portfolio-mobile` | Active | Expo app for Android, iOS, and web dashboard surfaces |
| `portfolio-db` | Active | PostgreSQL schema, migrations, seeds, and operational scripts |
| `portfolio-infrastructure` | Active | Local Docker Compose orchestration for development platform services |
| `portfolio-docs` | Active | Public documentation and sanitized diagrams |
| `portfolio-shared` | Deferred | Future shared contracts/types package if needed |
| `portfolio-site` | Deferred | Future public marketing/product site if needed |

## Ownership Boundaries

- `portfolio-api` owns API contracts, auth, imports, calculations, chat guardrails, and sanitized logging.
- `portfolio-mobile` consumes API contracts and does not connect directly to database or provider infrastructure.
- `portfolio-db` owns schema and database operations, not runtime orchestration.
- `portfolio-infrastructure` owns local platform services and Docker Compose boundaries.
- `portfolio-architect` owns governance, not product runtime behavior.
- `portfolio-docs` publishes safe public documentation, not internal operational memory.
