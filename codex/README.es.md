# Codex Router de memoria - portfolio-docs

Use `AGENTS.md` primero. Este router indica que memoria abrir después para trabajo de documentación pública.

## Skills centrales de lifecycle

El catálogo ejecutable Portfolio lifecycle Skills vive en `C:\Repos\portfolio-architect\codex\skills`.

Abra el `SKILL.md` central relevante antes de ejecutar estos pasos:

| Paso | Skill |
|------|-------|
| Cada proceso ejecutado por agentes antes de implementación, validación, actualización de PR o publicación | `portfolio-release-version` |
| Orquestación Master/Sub-Agent, child tasks docs delegados o solicitudes cross-agent | `portfolio-orchestrate-agents` |
| Inicio de Work Item, preparación de PR, fixes de review o closeout de merge | `portfolio-track-work-item` |
| Validación de compliance y public-safety | `portfolio-validate-compliance` |
| Actualizaciones de documentación y memoria | `portfolio-update-docs` |
| Version bumps, releases, tags o manifests coordinados | `portfolio-release-version` |

`portfolio-release-version` es obligatoria para cada proceso ejecutado por agentes incluso cuando no se espera bump de versión; úsela para registrar la versión objetivo o una decisión explícita de no-release antes de readiness de PR.

## Rutas de documentación

| Tarea | Empiece con |
|-------|-------------|
| Páginas de documentación pública, diagramas o guías | `AGENTS.md`, luego el archivo objetivo en `docs/` o `diagrams/` |
| Cambios public-safe de arquitectura, seguridad o compliance | `C:\Repos\portfolio-architect\PROJECT_STATE.md` |
| Supuestos cross-repo de workflow o release | `C:\Repos\portfolio-architect\PROJECT_STATE.md` |
| Wiki sync o despliegue GitHub Pages | `.github/workflows/` y `README.md` |

Mantenga este repo public-safe: sin secrets, URLs privadas, IPs internas, PII financiera, prompts, respuestas AI completas ni números de cuenta completos.
