# AGENTS.md - portfolio-docs

## Entry Point

- This repo is public-facing documentation only; do not add product runtime behavior from here.
- Before substantial documentation changes, confirm one Work Item in `portfolio-architect/specs/*/tasks.md` and one GitHub Work Item issue in `Ready` status.
- Read `portfolio-architect/PROJECT_STATE.md` for architecture, workflow, stack, testing, deployment, documentation language strategy, release/versioning, framework governance, or cross-repo assumption changes.
- Use `portfolio-architect/codex/skills` for lifecycle workflow steps, especially `portfolio-track-work-item`, `portfolio-update-docs`, and `portfolio-validate-compliance`.

## Public Documentation Boundary

- Publish high-level architecture, anonymized data flow, security posture, compliance posture, and public-safe guides.
- Do not publish secrets, tokens, API keys, credentials, `.env` values, full account numbers, account hashes, encrypted account values, prompts, full AI responses, financial PII, internal IPs, private URLs, or unresolved vulnerability details.
- Do not add financial advice, recommendations, trade execution, order routing, money movement, custody, or brokerage behavior.

## Repo Scope

- `README.md` is the public documentation entrypoint.
- `docs/` contains Docusaurus documentation pages.
- `diagrams/` contains public-safe Mermaid source diagrams.
- `CHANGELOG.md` records notable repo changes.

## Workflow

- Use `codex/NNN-MMM-short-slug` branches.
- Each PR references exactly one primary GitHub Work Item issue and its Spec Reference.
- Use Conventional Commits for commits and PR titles.
- Update `CHANGELOG.md` for documentation or governance changes.

## Validation

- Run `npm run build` for Docusaurus changes.
- For documentation-only changes, run `git diff --check`.
