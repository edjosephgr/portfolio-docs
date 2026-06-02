# AGENTS.md - portfolio-docs

## Punto de entrada

- Este repo es solo documentacion publica; no agregue comportamiento runtime del producto desde aqui.
- Antes de cambios sustanciales de documentacion, confirme un Work Item en `portfolio-architect/specs/*/tasks.md` con `Status: Ready` local y una referencia GitHub Work Item issue. No use labels, estado del issue ni campos Project de GitHub como fuente del estado de ejecucion.
- Lea `portfolio-architect/PROJECT_STATE.md` para cambios de arquitectura, workflow, stack, pruebas, despliegue, estrategia de lenguaje de documentacion, release/versioning, gobernanza del framework o supuestos entre repos.
- Use `portfolio-architect/codex/skills` para pasos de workflow de lifecycle, especialmente `portfolio-track-work-item`, `portfolio-update-docs` y `portfolio-validate-compliance`.

## Limite de documentacion publica

- Publique arquitectura de alto nivel, data flow anonimizado, postura de seguridad, postura de cumplimiento y guias public-safe.
- No publique secrets, tokens, API keys, credenciales, valores `.env`, numeros de cuenta completos, hashes de cuenta, valores cifrados de cuenta, prompts, respuestas AI completas, PII financiera, IPs internas, URLs privadas ni detalles de vulnerabilidades no mitigadas.
- No agregue asesoramiento financiero, recomendaciones, ejecucion de operaciones, order routing, movimiento de dinero, custodia ni comportamiento de brokerage.

## Alcance del repo

- `README.md` es el entrypoint de documentacion publica.
- `docs/` contiene paginas Docusaurus.
- `diagrams/` contiene diagramas Mermaid public-safe.
- `CHANGELOG.md` registra cambios notables del repo.

## Workflow

- Use ramas `codex/NNN-MMM-short-slug`.
- Cada PR referencia exactamente un GitHub Work Item issue principal y su Spec Reference.
- Antes de abrir un PR, valide el trabajo, actualice el estado Work Item local en `portfolio-architect` a `Done` e incluya ese cambio como commit final en el mismo workstream.
- Use Conventional Commits para commits y titulos de PR.
- Actualice `CHANGELOG.md` para cambios de documentacion o gobernanza.

## Validacion

- Ejecute `npm run build` para cambios Docusaurus.
- Para cambios solo de documentacion, ejecute `git diff --check`.
