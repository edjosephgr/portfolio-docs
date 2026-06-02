# Documentacion publica de Portfolio Tracker

Documentacion publica para Portfolio Tracker, un tracker personal de portafolio de solo lectura que importa actividad de inversion y datos de mercado, calcula metricas auditables y presenta insights descriptivos.

Portfolio Tracker no proporciona asesoramiento financiero, recomendaciones, ejecucion de operaciones, order routing, custodia, comportamiento de brokerage ni movimiento de dinero.

## Sitio de documentacion

Este repo usa Docusaurus y Markdown.

```powershell
npm install
npm run start
npm run build
```

## Secciones publicadas

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

## Limite de seguridad publica

Este repo es public-facing. No publique:

- Secrets, API keys, tokens, credenciales o valores `.env`
- Numeros de cuenta completos, PII financiera, prompts o respuestas AI completas
- IPs internas, URLs privadas o detalles de vulnerabilidades no mitigadas
- Detalles de implementacion que faciliten ataques materialmente

El estado operativo interno permanece en `portfolio-architect`.

## Repos relacionados

| Repositorio | Proposito |
|-------------|-----------|
| `portfolio-architect` | Estado del proyecto, ADRs, specs, Work Items y memoria del framework |
| `portfolio-api` | Backend API, auth, imports, calculos y limites de chat |
| `portfolio-mobile` | Cliente Expo mobile/web |
| `portfolio-db` | SQL migrations, seeds y scripts operativos de base de datos |
| `portfolio-infrastructure` | Orquestacion local Docker Compose y servicios de plataforma |

## Guia para agentes AI

Las reglas de agentes AI viven en `AGENTS.md`. Los cambios sustanciales requieren un Work Item en `portfolio-architect/specs/*/tasks.md` y un GitHub Work Item issue en estado `Ready`.
