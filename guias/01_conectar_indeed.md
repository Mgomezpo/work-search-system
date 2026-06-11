# Guia 01 — Conectar el conector de Indeed

El sistema busca vacantes con el **conector de Indeed**. Es de solo lectura: busca y trae detalles, pero **no envia aplicaciones**.

## Conectarlo

1. En Claude/Cowork, abre **Settings → Connectors** (o pidele a Claude: *"conecta el conector de Indeed"* y te guiara / lo sugerira desde el registro de conectores).
2. Busca **Indeed** y autoriza el acceso.
3. Listo. Claude ya puede usar las herramientas del conector.

## Herramientas disponibles

- `search_jobs(search, location, country_code, job_type)` — busca vacantes. `location` acepta una ciudad o `"remote"`.
- `get_job_details(job_id)` — descripcion completa, salario y link de aplicacion de una vacante.
- `get_company_data(...)` — info de la empresa (cultura, salarios, ratings).
- `get_resume()` — lee el CV que tengas en tu perfil de Indeed (util como punto de partida).

## Buenas practicas de busqueda

- **Lanza varias busquedas por rol** y sinonimos: "Senior Data Scientist", "Machine Learning Engineer", "Lead Data Scientist". Cada termino trae un set distinto.
- Usa `"remote"` como location y prueba varios `country_code` (US, CA, etc.) segun tu target.
- Trae `get_job_details` solo de las prometedoras: ahi esta el salario real, los requisitos y el **link correcto de aplicacion**.
- **Conserva los links intactos** (con sus parametros) al pasarlos al tracker.

## Limites importantes

- **No se aplica desde aqui.** El envio lo haces tu desde el link. Opcional: Claude puede ayudarte a *llenar* formularios con Claude en Chrome, pero el clic final lo das tu.
- Algunas vacantes piden **ciudadania/visa** o ubicacion especifica. Revisa `get_job_details` antes de invertir en un CV tailored.
