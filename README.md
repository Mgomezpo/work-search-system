# Work Search System 🚀

Sistema modular para sistematizar tu busqueda de trabajo de punta a punta: **buscar vacantes en Indeed → trackearlas en un Excel con dashboard → postular con hojas de vida ATS personalizadas → medir tu progreso**.

Todo es *file-based*: vive en una carpeta, no necesitas base de datos ni servidores. Funciona dentro de Cowork / Claude, usando el conector de Indeed y los skills de Excel y Word.

---

## Que incluye

```
work-search-system/
├── SKILL.md                         # Instrucciones para Claude (el "cerebro" del sistema)
├── README.md                        # Este archivo
├── plantillas/
│   ├── Work_Search_Tracker_TEMPLATE.xlsx   # Tracker + Dashboard listos para usar
│   └── CV_ATS_TEMPLATE.md                  # Esqueleto de hoja de vida ATS
├── guias/
│   ├── 01_conectar_indeed.md        # Conectar el conector de Indeed
│   ├── 02_usar_el_tracker.md        # Como poblar y mantener el tracker
│   ├── 03_escribir_cv_ats.md        # Como escribir CVs ATS tailored
│   ├── 04_medir_metricas.md         # Que metricas mirar y como decidir
│   └── 05_flujo_y_setup.md          # Setup inicial y flujo semanal
└── scripts/
    ├── build_tracker.py             # Genera el tracker desde cero
    └── build_cv.js                  # Genera un CV en .docx (docx-js)
```

---

## Como empezar (3 pasos)

1. **Instala o copia el sistema.**
   - *Como skill:* instala el archivo `.skill` (boton "Save skill") y Claude lo usara automaticamente cuando hables de buscar trabajo.
   - *Como carpeta:* copia esta carpeta a tu espacio de trabajo y abre el Excel de `plantillas/`.

2. **Setup inicial.** Dile a Claude: *"Arranquemos mi busqueda de trabajo"*. Te preguntara tus parametros (roles, modalidad, salario target, idioma del CV), copiara el tracker a tu carpeta y borrara las filas de ejemplo. Detalle en `guias/05_flujo_y_setup.md`.

3. **Usa el flujo.**
   - *"Busca en Indeed [rol] remoto y agrega al tracker."*
   - *"Hazme un CV tailored para [empresa – cargo] del tracker."*
   - *"¿Como va mi busqueda?"* → revisa el Dashboard.

---

## Filosofia

- **Modular.** Cada pieza (busqueda, tracker, CV, metricas) corre sola y se adapta a distintos perfiles. Un mismo sistema sirve para un data scientist, un dev o un PM.
- **Honesto.** Adaptar un CV = reordenar y usar el vocabulario de la vacante sobre logros **reales**, nunca inventar. Pasar el ATS con mentiras solo quema la entrevista.
- **Medible.** Si no mides la tasa de respuesta y de entrevistas, no sabes si el problema es volumen, fit o el CV. El dashboard te lo dice.

---

## Requisitos

- Conector de Indeed conectado (ver `guias/01_conectar_indeed.md`).
- Skills de Excel (`xlsx`) y Word (`docx`) disponibles para generar los archivos.

## Licencia

Uso personal. Adaptalo a tu gusto y compartelo con quien lo necesite.
