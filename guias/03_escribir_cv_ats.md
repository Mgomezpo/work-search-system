# Guia 03 — Escribir CVs ATS tailored

Un CV *tailored* no es un CV nuevo: es tu CV master **reordenado y reencuadrado** con el vocabulario de la vacante. Mismo contenido verdadero, mejor alineado.

## Proceso (4 pasos)

1. **Extrae las palabras clave de la vacante.** Usa `get_job_details` y subraya: tecnologias (ej. PostgreSQL, AWS, RAG), responsabilidades (ej. "deploy models to production"), y nivel (Senior, Lead). Esas son las palabras que el ATS busca.

2. **Cruza con tu experiencia real.** Para cada keyword, busca donde la cumples en tu historia. Lo que cumples, subelo y nombralo con la palabra exacta de la vacante. Lo que no cumples, **no lo inventes**.

3. **Reescribe 3 zonas:**
   - **Titulo + Summary**: alinea el titulo al rol y mete 3-4 keywords en el resumen.
   - **Core Skills**: reordena para que las skills del rol aparezcan primero.
   - **Bullets del rol mas relevante**: reencuadra para resaltar lo que la vacante valora (sin cambiar los hechos).

4. **Genera y verifica.** Crea el `.docx` (ver `scripts/build_cv.js`), exportalo a PDF, y registra el nombre del archivo en la columna "CV usado" del tracker.

## Reglas de oro ATS

Ver tambien `plantillas/CV_ATS_TEMPLATE.md`:

- Una sola columna, sin tablas/imagenes/iconos ni datos clave en header/footer.
- Fuentes estandar (Arial, Calibri). Titulos de seccion estandar.
- Keywords tal cual aparecen en la vacante. Sin keyword stuffing.
- Logros con numeros y verbos de accion.
- PDF para enviar; `.docx` solo si el portal lo pide.

## Honestidad (lo mas importante)

Adaptar = **enfatizar y traducir** logros reales al lenguaje del rol. Nunca fabricar experiencia ni metricas. Si hay un gap importante (ej. piden GCP y tu eres AWS, o piden ciudadania que no tienes), **dilo al usuario** antes de aplicar: a veces conviene reencuadrar, a veces conviene no gastar el esfuerzo. Un CV que pasa el ATS con mentiras solo quema la entrevista.

## Ejemplo de reencuadre (mismo hecho, dos vacantes)

Hecho real: *construiste pipelines de IA en AWS Lambda con Bedrock.*

- Vacante "AI Engineer (RAG/LLM)": "Designed RAG pipelines on AWS (Lambda, Bedrock) combining retrieval and LLMs in production."
- Vacante "MLOps Lead": "Built and deployed production AI pipelines on AWS with monitoring and CI/CD, owning the lifecycle end to end."
