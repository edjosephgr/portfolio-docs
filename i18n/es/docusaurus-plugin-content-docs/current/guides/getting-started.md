---
title: Primeros Pasos
---

# Primeros Pasos

Esta guía pública explica el ecosistema a alto nivel. Detalles internos de setup, secrets locales, URLs privadas y valores de red específicos de una máquina viven en repos operativos privados.

## Orden De Lectura Recomendado

1. Lea [Resumen Del Sistema](../architecture/system-overview.md).
2. Lea [Flujo De Datos](../architecture/data-flow.md).
3. Lea [Resumen De Seguridad](../security/security-overview.md).
4. Lea [Workflow Del Framework](../architecture/framework-workflow.md).
5. Use el README específico del repo activo relevante para desarrollo local.

## Resumen De Desarrollo

- El desarrollo API ocurre en `portfolio-api`.
- El desarrollo mobile/web ocurre en `portfolio-mobile`.
- El trabajo de schema database ocurre en `portfolio-db`.
- La orquestación de plataforma local ocurre en `portfolio-infrastructure`.
- Gobernanza, specs, Work Items, ADRs y Skills viven en `portfolio-architect`.
- La documentación pública vive en `portfolio-docs`.

## Workflow De Cambios

Cada cambio sustancial comienza desde un Work Item local gobernado con una referencia GitHub issue. Los cambios de documentación pública también necesitan trazabilidad Work Item cuando alteran arquitectura, seguridad, compliance, workflow o estado publicado del proyecto.

## Resumen De Validación

La validación depende del repo afectado. Checks comunes incluyen linting, tests, builds, documentation build y `git diff --check`.
