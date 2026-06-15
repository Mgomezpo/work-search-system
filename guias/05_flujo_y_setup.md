# Guia 05 — Setup inicial y flujo

## Setup (primera vez)

1. **Copia la plantilla.** Lleva `plantillas/Work_Search_Tracker_TEMPLATE.xlsx` a tu carpeta de trabajo y renombrala `Work_Search_Tracker.xlsx`. Borra las dos filas de **EJEMPLO**.

2. **Define tus parametros** (registralos; guian todo el sistema):
   - Roles objetivo y sinonimos de busqueda.
   - Modalidad y ubicacion (remoto global / US / LATAM / ciudad).
   - Salario target (ajusta los umbrales de la columna "Fit salario" si difieren de $5,000–6,000).
   - Idioma del CV.

3. **Conecta Indeed si esta disponible** (ver `guia 01`). Si no, el flujo funciona con texto copiado de la vacante.

4. **Prepara tu CV master** a partir de `plantillas/CV_ATS_TEMPLATE.md` o de tu CV actual. De aqui saldran las versiones tailored.

## Flujo semanal

```
  Buscar en Indeed → Poblar tracker → CV tailored → Aplicar → Actualizar estado/respuesta/entrevista
        ▲                                                                         │
        └──────────────────────────  medir y ajustar (viernes)  ◄────────────────┘
```

Frases utiles para decirle a Claude:
- *"Busca en Indeed [rol] remoto y agrega al tracker."*
- *"Aqui esta la descripcion de una vacante — agregala al tracker."*
- *"Hazme un CV tailored para [empresa – cargo] del tracker."*
- *"¿Como va mi busqueda?"* → revisa el Dashboard.

## Estructura de carpetas sugerida

```
Mi_Busqueda/
├── Work_Search_Tracker.xlsx
├── CV_master.md  (o .docx)
└── Tailored_CVs/
    ├── CV_[Empresa]_[Cargo].md  (o .docx / .pdf)
    └── ...
```

## Recordatorios

- El conector **no envia aplicaciones**: el envio lo haces tu desde el link.
- **Con terminal disponible:** verifica el Excel con `recalc.py` (0 errores) y valida cada `.docx` generado.
- **Sin terminal:** Claude entrega tablas/CSV listos para importar y CV en markdown listo para copiar.
- Manten todo file-based: una carpeta portatil, sin DB ni servidores.
