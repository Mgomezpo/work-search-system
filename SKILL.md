---
name: work-search-system
description: "Sistema completo para sistematizar la busqueda de trabajo: buscar vacantes en Indeed, trackearlas en un Excel con dashboard, y generar hojas de vida ATS personalizadas (tailored) por vacante. Usa este skill SIEMPRE que el usuario quiera buscar empleo, organizar postulaciones, montar un tracker o pipeline de aplicaciones, medir su tasa de respuesta/entrevistas, adaptar o mejorar su CV/hoja de vida para una vacante, optimizar palabras clave ATS, o pida 'ayudame a buscar trabajo' / 'organiza mis aplicaciones' / 'hazme un CV para esta vacante', incluso si no menciona Indeed o Excel explicitamente."
---

# Work Search System

Sistema modular y file-based para llevar una busqueda de empleo como un pipeline: **buscar -> trackear -> aplicar con CV tailored -> medir**. Todo vive en una carpeta del usuario; no requiere base de datos ni cloud.

## Cuando usar este skill

Actívalo en cuanto el usuario hable de buscar trabajo, postularse, organizar vacantes, preparar o adaptar su hoja de vida, o medir el progreso de su busqueda. No esperes a que mencione "Indeed" o "Excel".

## Componentes (en este paquete)

- `plantillas/Work_Search_Tracker_TEMPLATE.xlsx` — tracker central (hoja **Dashboard** con metricas automaticas + hoja **Tracker** con una fila por vacante).
- `plantillas/CV_ATS_TEMPLATE.md` — esqueleto de CV ATS con guia de secciones.
- `guias/` — instrucciones detalladas (leer la relevante segun la tarea).
- `scripts/` — generadores reutilizables (tracker en Python, CV en docx-js).

## Flujo de trabajo

1. **Setup (primera vez).** Copia `Work_Search_Tracker_TEMPLATE.xlsx` a la carpeta de trabajo del usuario como `Work_Search_Tracker.xlsx`. Pregunta y registra sus parametros: roles objetivo, modalidad/ubicacion, salario target, idioma del CV. Borra las filas de EJEMPLO. Ver `guias/05_flujo_y_setup.md`.

2. **Buscar vacantes.** Usa el conector de Indeed (`search_jobs`, `get_job_details`). Si no esta conectado, guia al usuario a conectarlo: ver `guias/01_conectar_indeed.md`. Lanza varias busquedas por rol y trae detalles de las prometedoras.

3. **Poblar el tracker.** Agrega cada vacante como fila: empresa, cargo, link de aplicacion (como hipervinculo "Aplicar"), ubicacion, salario, contexto, y deja Estado = "Por aplicar". El salario mensual y el fit se calculan con formulas. Recalcula con `python scripts/recalc.py <archivo>` (del skill de xlsx) y verifica 0 errores. Ver `guias/02_usar_el_tracker.md`.

4. **CV tailored por vacante.** Para una vacante, extrae las palabras clave del `get_job_details`, cruza con la experiencia real del usuario (CV master) y genera una version ATS adaptada en el idioma objetivo. Nunca inventes experiencia ni metricas; reordena, enfatiza y usa el vocabulario de la vacante sobre logros reales. Marca gaps honestamente al usuario. Ver `guias/03_escribir_cv_ats.md`. Genera el .docx con `scripts/build_cv.js` y conviertelo a PDF.

5. **Medir.** El Dashboard se actualiza solo (total, aplicadas, entrevistas, ofertas, tasa de respuesta). Revisalo semanalmente y sugiere ajustes (mas volumen, mejor fit, CV mas fuerte). Ver `guias/04_medir_metricas.md`.

## Principios

- **File-based y portatil.** Todo en una carpeta; el usuario abre el Excel cuando quiera. Sin DB ni servidores.
- **Honestidad ATS.** Adaptar = reordenar y usar el vocabulario correcto sobre logros verdaderos, jamas fabricar. Un CV que pasa el ATS pero miente quema la entrevista.
- **Verificacion.** Tras crear/editar el Excel, recalcula y confirma cero errores de formula. Tras crear un .docx, validalo.
- **Iterativo.** Modular a proposito: cada pieza (busqueda, tracker, CV) se puede correr sola y adaptar a distintos perfiles.

## Limitaciones conocidas

- El conector de Indeed **solo busca y lee** vacantes; **no envia aplicaciones**. El envio lo hace el usuario desde el link. (Opcional: ayudar a llenar formularios con Claude en Chrome, pero el clic final lo da el usuario.)
- Algunas vacantes restringen por ciudadania/visa o ubicacion. Detectalo en `get_job_details` y avisa antes de invertir esfuerzo en un CV tailored.

## Notas de implementacion

- Para construir/recalcular el Excel se usa `openpyxl` + el `recalc.py` del skill `xlsx`.
- Para el CV se usa `docx-js` (`npm install docx`) y LibreOffice para exportar a PDF; ver el skill `docx`.
- Si un script se ve truncado tras ediciones, reescribe el archivo completo en vez de editar por partes.
