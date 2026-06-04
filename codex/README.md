# Codex Memory Router - portfolio-docs

Use `AGENTS.md` first. This router tells agents which project memory to open next for public documentation work.

## Central Lifecycle Skills

The executable Portfolio lifecycle Skills catalog lives in `C:\Repos\portfolio-architect\codex\skills`.

Open the relevant central `SKILL.md` before executing these steps:

| Step | Skill |
|------|-------|
| Master/Sub-Agent orchestration, delegated docs child tasks, or cross-agent requests | `portfolio-orchestrate-agents` |
| Work Item start, PR readiness, review fixes, or merge closeout | `portfolio-track-work-item` |
| Compliance and public-safety validation | `portfolio-validate-compliance` |
| Documentation and memory updates | `portfolio-update-docs` |
| Version bumps, releases, tags, or coordinated manifests | `portfolio-release-version` |

## Documentation Routes

| Task | Start with |
|------|------------|
| Public documentation pages, diagrams, or guides | `AGENTS.md`, then the target `docs/` or `diagrams/` file |
| Public-safe architecture, security, or compliance changes | `C:\Repos\portfolio-architect\PROJECT_STATE.md` |
| Cross-repo workflow or release assumptions | `C:\Repos\portfolio-architect\PROJECT_STATE.md` |
| Wiki sync or GitHub Pages deployment | `.github/workflows/` and `README.md` |

Keep this repo public-safe: no secrets, private URLs, internal IPs, financial PII, prompts, full AI responses, or full account numbers.
