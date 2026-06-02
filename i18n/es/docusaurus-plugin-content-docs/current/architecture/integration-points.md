---
title: Puntos De Integración
---

# Puntos De Integración

Portfolio Tracker tiene un conjunto pequeño de límites de integración.

## API

La API expone capacidades autenticadas de portafolio, dashboard, data, import, auth y chat descriptivo. Los contratos API se versionan internamente y deben permanecer estables salvo que un Work Item coordine explícitamente los clientes afectados.

Áreas API representativas:

- Autenticación y helper de auth para desarrollo
- Selección de portafolio
- Resumen dashboard y breakdowns de métricas
- Vistas paginadas de transacciones/datos crudos
- Workflows de importación fuente
- Sesiones y mensajes de chat descriptivo
- Endpoints de health y documentación API

## Cliente Mobile/Web

La app Expo consume contratos API y renderiza:

- Login
- Dashboard
- Tablas de datos
- Breakdowns de métricas
- Holdings
- Liquidations
- Settings y estados de error

La app mobile no se conecta directamente a PostgreSQL, servicios LLM locales, embeddings, infraestructura de providers ni proveedores de market data.

## Database

PostgreSQL almacena users, sessions, portfolios, broker accounts, source documents, transactions, holdings snapshots, statement snapshots, market daily closes, closed positions y chat records.

Las filas sensibles se acotan por `user_id` y `portfolio_id`.

## Infraestructura Local

La infraestructura local orquesta servicios de desarrollo mediante Docker Compose. La documentación pública omite intencionalmente IPs locales privadas, valores secretos y hostnames privados de túneles.

## Límite De Chat AI

El límite de chat es solo descriptivo. Usa contexto limitado y sanitizado, bloquea solicitudes prescriptivas de trading antes de llamadas a providers cuando es posible, y no debe exponer prompts, respuestas completas, secrets, números de cuenta completos ni PII financiera en logs o docs públicos.
