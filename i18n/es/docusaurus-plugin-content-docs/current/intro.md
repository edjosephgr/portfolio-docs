---
title: Portfolio Tracker
slug: /
---

# Portfolio Tracker

Portfolio Tracker es un sistema read-only para seguimiento personal de portafolios. Importa actividad de inversión y datos de mercado, calcula métricas auditables y presenta insights descriptivos.

El límite del producto es intencionalmente estrecho:

- No provee asesoramiento financiero.
- No recomienda comprar, vender, mantener, rebalancear ni hacer trading.
- No ejecuta trades, enruta órdenes, mueve dinero, custodia activos ni actúa como brokerage.
- Muestra estados `Pending` o `Partial` cuando faltan registros fuente o datos de mercado.

## Qué Hace El Sistema

- Importa statements, trade confirmations y datos de mercado.
- Almacena actividad financiera normalizada por usuario y portafolio.
- Calcula métricas descriptivas con breakdowns auditables.
- Presenta dashboards mediante superficies mobile, web y API.
- Soporta un límite de chat AI local solo para preguntas descriptivas del portafolio.

## Ecosistema De Repositorios

| Repositorio | Propósito |
|-------------|-----------|
| `portfolio-architect` | Estado del proyecto, ADRs, specs, Work Items, version manifest y memoria del framework |
| `portfolio-api` | API backend para auth, imports, cálculos, acceso a datos y límites de chat descriptivo |
| `portfolio-mobile` | App Expo para experiencias dashboard Android, iOS y web |
| `portfolio-db` | Migraciones DB, seeds, scripts backup/restore y ownership de schema |
| `portfolio-infrastructure` | Orquestación Docker Compose local y servicios de plataforma |
| `portfolio-docs` | Documentación pública |

## Alcance De La Documentación

Esta documentación pública describe arquitectura, workflows y postura de seguridad a alto nivel. Runbooks internos, secrets, detalles privados de infraestructura y datos financieros de usuarios se excluyen intencionalmente.
