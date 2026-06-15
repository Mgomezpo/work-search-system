# Guia 02 — Usar el tracker

El tracker (`Work_Search_Tracker.xlsx`) tiene dos hojas: **Dashboard** (metricas automaticas) y **Tracker** (una fila por vacante).

## Columnas de la hoja Tracker

| Columna | Que va |
|---|---|
| ID | Numero consecutivo |
| Fecha agregado | Cuando la agregaste (YYYY-MM-DD) |
| Empresa / Cargo | Nombre y titulo de la vacante |
| Link (aplicar) | Hipervinculo "Aplicar" al link de Indeed |
| Ubicacion / Modalidad | Remote, ciudad, hibrido |
| Salario (USD) | Texto tal cual de la vacante |
| Salario/mes aprox | **Formula**: promedio anual / 12 |
| Fit salario | **Formula**: Excelente / En target / Aceptable / Bajo vs tu target |
| Contexto / Descripcion | Resumen del rol y por que encaja |
| Match ATS (%) | Estimacion de match con tu perfil |
| CV usado | Nombre del archivo del CV tailored enviado |
| Fecha aplicacion | Cuando aplicaste |
| Estado | Lista: Por aplicar → Aplicado → En revision → Entrevista → Oferta (o Rechazado/Descartado) |
| Respuesta | Lista: Sin respuesta / Acuse de recibo / Recruiter screen / Avanza / Rechazo / Oferta |
| Entrevista | Lista: Por agendar / Agendada / Screen tecnico / On-site / Completada / No avanzo |
| Notas | Proximos pasos, contactos, deadlines |

## Como poblarlo (con Claude)

> "Busca en Indeed Senior Data Scientist remoto y agrega los resultados al tracker."

Claude hara `search_jobs`, traera detalles de las mejores y escribira una fila por vacante con Estado = "Por aplicar". Las columnas de salario mensual y fit se calculan solas.

Si el conector de Indeed no esta disponible, Claude extrae los mismos campos del texto de la vacante que pegues.

## Mantenerlo sano

- **Con acceso a terminal:** tras cualquier edicion con formulas, recalcula con `python scripts/recalc.py Work_Search_Tracker.xlsx` y verifica **0 errores**.
- **Sin acceso a terminal:** Claude entrega las filas nuevas como tabla markdown o CSV; importalas en Excel con *Datos → Desde texto/CSV* y verifica que las formulas de salario y fit se apliquen correctamente.
- Usa siempre las **listas desplegables** para Estado/Respuesta/Entrevista: mantiene las metricas del Dashboard consistentes.
- El **fit salario** compara el aproximado mensual con un target de referencia (por defecto $5,000–6,000). Ajusta los umbrales en la formula de la columna I si tu target es otro.
- Capacidad: las formulas y validaciones cubren hasta la fila 200. Si necesitas mas, extiende los rangos.
