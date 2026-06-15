---
name: work-search-system
description: "Sistema completo para sistematizar la busqueda de trabajo: buscar vacantes en Indeed, trackearlas en un Excel con dashboard, y generar hojas de vida ATS personalizadas (tailored) por vacante. Usa este skill SIEMPRE que el usuario quiera buscar empleo, organizar postulaciones, montar un tracker o pipeline de aplicaciones, medir su tasa de respuesta/entrevistas, adaptar o mejorar su CV/hoja de vida para una vacante, optimizar palabras clave ATS, o pida 'ayudame a buscar trabajo' / 'organiza mis aplicaciones' / 'hazme un CV para esta vacante', incluso si no menciona Indeed o Excel explicitamente."
---

# Work Search System

Sistema modular y file-based para llevar una busqueda de empleo como un pipeline: **buscar -> trackear -> aplicar con CV tailored -> medir**. Todo vive en una carpeta del usuario; no requiere base de datos ni cloud.

## Cuando usar este skill

Activalo en cuanto el usuario hable de buscar trabajo, postularse, organizar vacantes, preparar o adaptar su hoja de vida, o medir el progreso de su busqueda. No esperes a que mencione "Indeed" o "Excel".

## Componentes (en este paquete)

- `plantillas/Work_Search_Tracker_TEMPLATE.xlsx` — tracker central (hoja **Dashboard** con metricas automaticas + hoja **Tracker** con una fila por vacante).
- `plantillas/CV_ATS_TEMPLATE.md` — esqueleto de CV ATS con guia de secciones.
- `guias/` — instrucciones detalladas (leer la relevante segun la tarea).
- `scripts/` — generadores reutilizables opcionales (tracker en Python, CV en docx-js) para entornos con acceso a terminal.

## Flujo de trabajo

1. **Setup (primera vez).** Copia `Work_Search_Tracker_TEMPLATE.xlsx` a la carpeta de trabajo del usuario como `Work_Search_Tracker.xlsx`. Pregunta y registra sus parametros: roles objetivo, modalidad/ubicacion, salario target, idioma del CV. Borra las filas de EJEMPLO. Ver `guias/05_flujo_y_setup.md`.

2. **Buscar vacantes.** Si el conector de Indeed esta disponible (`search_jobs`, `get_job_details`), usalo directamente. Si no, pide al usuario que busque en Indeed y pegue las descripciones; extrae los datos relevantes del texto. Ver `guias/01_conectar_indeed.md`.

3. **Poblar el tracker.** Agrega cada vacante como fila: empresa, cargo, link de aplicacion (como hipervinculo "Aplicar"), ubicacion, salario, contexto, y deja Estado = "Por aplicar". El salario mensual y el fit se calculan con formulas. Si tienes acceso a terminal, recalcula con `python scripts/recalc.py <archivo>` y verifica 0 errores; si no, entrega los datos en formato copiable (CSV o tabla markdown) para que el usuario los importe manualmente. Ver `guias/02_usar_el_tracker.md`.

4. **CV tailored por vacante.** Para una vacante, extrae las palabras clave del `get_job_details` (o del texto pegado), cruza con la experiencia real del usuario (CV master) y genera una version ATS adaptada en el idioma objetivo. Nunca inventes experiencia ni metricas; reordena, enfatiza y usa el vocabulario de la vacante sobre logros reales. Marca gaps honestamente al usuario. Si tienes acceso a terminal, genera el .docx con `scripts/build_cv.js` y conviertelo a PDF; si no, entrega el CV en markdown listo para copiar o guardar. Ver `guias/03_escribir_cv_ats.md`.

5. **Medir.** El Dashboard se actualiza solo (total, aplicadas, entrevistas, ofertas, tasa de respuesta). Revisalo semanalmente y sugiere ajustes (mas volumen, mejor fit, CV mas fuerte). Ver `guias/04_medir_metricas.md`.

## Principios

- **File-based y portatil.** Todo en una carpeta; el usuario abre el Excel cuando quiera. Sin DB ni servidores.
- **Honestidad ATS.** Adaptar = reordenar y usar el vocabulario correcto sobre logros verdaderos, jamas fabricar. Un CV que pasa el ATS pero miente quema la entrevista.
- **Verificacion.** Tras crear/editar el Excel con scripts, recalcula y confirma cero errores de formula. Tras crear un .docx, validalo. Sin terminal, entrega datos estructurados listos para importar.
- **Iterativo.** Modular a proposito: cada pieza (busqueda, tracker, CV) se puede correr sola y adaptar a distintos perfiles.
- **Agnóstico al entorno.** Las instrucciones funcionan tanto con herramientas de automatizacion disponibles (MCP, terminal, scripts) como en modo conversacional puro; adapta la salida al contexto de ejecucion.

## Limitaciones conocidas

- El conector de Indeed **solo busca y lee** vacantes; **no envia aplicaciones**. El envio lo hace el usuario desde el link. (Opcional: ayudar a llenar formularios con Claude en Chrome, pero el clic final lo da el usuario.)
- Algunas vacantes restringen por ciudadania/visa o ubicacion. Detectalo en `get_job_details` (o en el texto de la vacante) y avisa antes de invertir esfuerzo en un CV tailored.

## Notas de implementacion

- Si hay acceso a terminal: el Excel se construye/recalcula con `openpyxl` + `scripts/recalc.py`; el CV se genera con `docx-js` (`npm install docx`) y LibreOffice para exportar a PDF.
- Sin acceso a terminal: genera el contenido del tracker como tabla markdown o CSV para importar, y el CV como markdown estructurado listo para copiar o pegar en Word/Google Docs.
- Si un script se ve truncado tras ediciones, reescribe el archivo completo en vez de editar por partes.
