---
title: Postura De Compliance
---

# Postura De Compliance

Portfolio Tracker está construido alrededor de controles para manejo de datos financieros y personales. No es brokerage, custodio, venue de trading ni asesor financiero.

## Frameworks Aplicables

| Framework | Relevancia actual |
|-----------|-------------------|
| SOC 2 | Seguridad, disponibilidad, change control, auditabilidad y least privilege |
| GDPR / PII | Minimización de datos, manejo de datos de usuario, conceptos de eliminación y postura de privacidad |
| OWASP Top 10 | Controles de seguridad web/API, límites auth, validación de input e higiene de logging |

PCI-DSS y HIPAA no son frameworks objetivo actuales porque el producto no procesa pagos con tarjeta ni datos de salud.

## Límite Del Producto

Portfolio Tracker es read-only:

- Sin recomendaciones
- Sin asesoramiento financiero
- Sin trade execution
- Sin order routing
- Sin custodia
- Sin money movement
- Sin comportamiento de brokerage

## Auditabilidad

La auditabilidad viene de:

- Spec Kit Work Items
- Referencias GitHub issue
- PRs y Conventional Commits
- ADRs
- Changelogs
- Breakdowns de métricas en comportamiento del producto

## Requisitos De Documentación Pública

La documentación pública debe permanecer sanitizada. Si un cambio afecta arquitectura pública o postura de seguridad, actualice este repo junto con la memoria interna.
