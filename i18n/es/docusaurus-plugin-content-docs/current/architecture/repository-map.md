---
title: Mapa De Repositorios
---

# Mapa De Repositorios

| Repositorio | Estado | Rol público |
|-------------|--------|-------------|
| `portfolio-architect` | Activo | Fuente interna de verdad para estado del proyecto, specs, ADRs, Work Items y alineación de versiones |
| `portfolio-api` | Activo | API backend para autenticación, imports, cálculos, dashboard data, raw data y chat descriptivo |
| `portfolio-mobile` | Activo | App Expo para superficies dashboard Android, iOS y web |
| `portfolio-db` | Activo | Schema PostgreSQL, migraciones, seeds y scripts operativos |
| `portfolio-infrastructure` | Activo | Orquestación Docker Compose local para servicios de plataforma de desarrollo |
| `portfolio-docs` | Activo | Documentación pública y diagramas sanitizados |
| `portfolio-shared` | Diferido | Futuro paquete de contratos/tipos compartidos si se necesita |
| `portfolio-site` | Diferido | Futuro sitio público de marketing/producto si se necesita |

## Límites De Ownership

- `portfolio-api` posee contratos API, auth, imports, cálculos, guardrails de chat y logging sanitizado.
- `portfolio-mobile` consume contratos API y no se conecta directamente a database ni infraestructura de providers.
- `portfolio-db` posee schema y operaciones DB, no runtime orchestration.
- `portfolio-infrastructure` posee servicios de plataforma local y límites Docker Compose.
- `portfolio-architect` posee gobernanza, no comportamiento runtime del producto.
- `portfolio-docs` publica documentación pública segura, no memoria operativa interna.
