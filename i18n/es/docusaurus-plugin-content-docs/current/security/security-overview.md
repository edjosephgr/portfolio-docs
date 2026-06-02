---
title: Resumen De Seguridad
---

# Resumen De Seguridad

Portfolio Tracker maneja datos financieros y personales, por eso la postura pública de seguridad enfatiza least privilege, minimización de datos, límites de acceso auditables y logging sanitizado.

## Principios De Seguridad

- Acotar datos sensibles por usuario autenticado y portafolio.
- Nunca usar un número de cuenta broker como primary key.
- Nunca exponer números de cuenta completos en UI, respuestas API, logs, prompts o docs públicos.
- Almacenar refresh tokens hasheados.
- Mantener secrets en secret stores específicos del ambiente, nunca en source control.
- Mantener helpers solo-locales de desarrollo deshabilitados fuera de desarrollo local.
- Preferir estados explícitos `Pending` o `Partial` sobre datos financieros inventados.

## Límite De Divulgación Pública

Esta documentación intencionalmente no publica:

- Valores secretos o formatos de tokens más allá de conceptos de alto nivel
- Hostnames privados o detalles de red local
- Hallazgos completos de vulnerabilidades
- Cuerpos de prompts o respuestas AI completas
- Números de cuenta reales, PII financiera o registros de usuarios

## Calidad Y Validación

El proyecto usa validación específica por repo como linting, tests, builds, dependency audits y quality gates locales cuando están disponibles. Hosted CI no asume acceso a máquinas locales de desarrollo ni servicios locales privados.
