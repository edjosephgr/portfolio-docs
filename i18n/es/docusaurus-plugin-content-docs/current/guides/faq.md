---
title: FAQ
---

# FAQ

## ¿Portfolio Tracker es un brokerage?

No. Es un tracker read-only. No ejecuta trades, no enruta órdenes, no custodia activos, no mueve dinero ni provee comportamiento de brokerage.

## ¿Portfolio Tracker da asesoramiento financiero?

No. Los insights son descriptivos, no prescriptivos. El producto no debe recomendar comprar, vender, mantener, hacer trading ni rebalancear.

## ¿Qué ocurre cuando faltan datos?

El producto debe mostrar estados `Pending` o `Partial` en lugar de inventar valores o caer silenciosamente a periodos no relacionados.

## ¿Dónde está la fuente de verdad?

`portfolio-architect` posee estado del proyecto, ADRs, specs, estado local de Work Items, version manifest y memoria del framework. `portfolio-docs` es la superficie pública de documentación.

## ¿Los docs públicos pueden mostrar números de cuenta reales de ejemplo?

No. Los docs públicos no deben mostrar números de cuenta completos, hashes reales de cuenta, valores cifrados de cuenta, PII financiera, prompts, respuestas AI completas, tokens, secrets, URLs privadas ni IPs internas.

## ¿Por qué el proyecto usa múltiples repos?

La separación mantiene comportamiento de producto, mobile UI, schema database, infraestructura, gobernanza y documentación pública con límites claros de ownership.
