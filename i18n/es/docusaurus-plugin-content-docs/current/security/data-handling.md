---
title: Manejo De Datos
---

# Manejo De Datos

Portfolio Tracker almacena actividad financiera para calcular métricas descriptivas y auditables del portafolio.

## Categorías De Datos

| Categoría | Ejemplos | Manejo público |
|-----------|----------|----------------|
| Identidad de usuario | Email, identificadores auth, registros de sesión | No publicar valores reales |
| Ownership de portafolio | `user_id`, `portfolio_id` | Discutir solo como conceptos de scoping |
| Referencias de cuenta broker | Número de cuenta redacted, hash, valor cifrado | Nunca publicar números completos ni hashes reales |
| Documentos fuente | Statements, trade confirmations, metadata de import | Discutir tipos, no contenidos |
| Transacciones | Fechas, operaciones, tickers, montos, descripciones | Publicar solo ejemplos anonimizados |
| Market data | Ticker, date, close, adjusted, source | Concepto público, sin dumps propietarios |
| Registros de chat | Sessions y messages | No publicar prompts ni respuestas AI completas |

## Reglas De Número De Cuenta

- Los números de cuenta completos no son primary keys.
- La visualización UI/API usa números de cuenta redacted.
- Hashes o valores cifrados se usan solo cuando es necesario.
- Los docs públicos no deben incluir números de cuenta completos, hashes ni valores cifrados de cuenta.

## Reglas De Market Data

Market data almacena solo filas de cierre diario ajustado:

- `ticker`
- `date`
- `close`
- `adjusted`
- `source`

Si falta market data, el comportamiento del producto debe mostrar `Pending`.

## Reglas De Contexto AI

El contexto de chat descriptivo es limitado y sanitizado. El sistema debe evitar exponer prompts, respuestas AI completas, secrets, tokens, números de cuenta completos o PII financiera.
