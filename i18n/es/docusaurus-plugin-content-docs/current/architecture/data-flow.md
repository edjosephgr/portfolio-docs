---
title: Flujo De Datos
---

# Flujo De Datos

Portfolio Tracker importa registros fuente, los normaliza por usuario y portafolio, calcula métricas descriptivas y presenta resultados auditables.

```mermaid
sequenceDiagram
  participant User as Usuario
  participant Mobile as Mobile/Web App
  participant API as API
  participant DB as PostgreSQL
  participant Market as Market Data
  participant Chat as Límite de Chat Descriptivo

  User->>Mobile: Inicia sesión y selecciona portafolio
  Mobile->>API: Solicita dashboard o datos
  API->>DB: Consulta filas acotadas por user_id y portfolio_id
  API->>Market: Lee cierres diarios ajustados cuando aplica
  API->>API: Calcula métricas descriptivas y breakdowns auditables
  API-->>Mobile: Devuelve dashboard, datos, estados Pending o Partial
  User->>Mobile: Hace una pregunta descriptiva del portafolio
  Mobile->>API: Envía solicitud de chat
  API->>DB: Construye contexto limitado y sanitizado
  API->>Chat: Envía contexto solo descriptivo
  Chat-->>API: Devuelve respuesta descriptiva
  API-->>Mobile: Transmite respuesta sanitizada
```

## Entradas Fuente

- Statements
- Trade confirmations
- Filas de transacciones normalizadas
- Statement snapshots
- Filas de cierre diario ajustado de mercado

## Semántica De Salida

- Las métricas importantes incluyen breakdowns auditables.
- Los datos fuente faltantes no caen silenciosamente a periodos no relacionados.
- La market data faltante aparece como `Pending`.
- La cobertura parcial de fuentes aparece como `Partial` cuando aplica.

## Minimización De Datos

El sistema almacena y expone solo lo necesario para soportar tracking de portafolios y auditabilidad. Los docs públicos no incluyen datos reales de usuarios, números de cuenta completos ni identificadores sensibles.
