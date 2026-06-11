# Cómo subir este repo a GitHub

Sigue estos pasos desde tu computador (donde está tu sesión de GitHub). Toma ~2 minutos.

## 0. (Solo esta vez) Borra el `.git` roto

Durante la preparación se creó una carpeta `.git` incompleta que no se pudo borrar desde el entorno. Bórrala tú primero:

- **Windows (PowerShell):**
  ```powershell
  cd "C:\Users\mgome\Claude\Projects\Work Search\work-search-system"
  Remove-Item -Recurse -Force .git
  ```
- **Mac/Linux:**
  ```bash
  cd "ruta/a/work-search-system"
  rm -rf .git
  ```

## 1. Crea el repositorio vacío en GitHub

Ve a https://github.com/new y crea un repo llamado **work-search-system**.
- NO marques "Add a README" (este repo ya tiene uno).
- Déjalo Public o Private, como prefieras.
- Copia la URL que te da (ej. `https://github.com/TU_USUARIO/work-search-system.git`).

## 2. Inicializa y haz push

Desde la carpeta `work-search-system`, corre (reemplaza la URL por la tuya):

```bash
git init
git add -A
git commit -m "Work Search System: tracker + ATS CV templates, guias y skill"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/work-search-system.git
git push -u origin main
```

Si te pide login, usa tu usuario y un **Personal Access Token** (Settings → Developer settings → Tokens) como contraseña.

## 3. Listo — comparte el link

Tu repo queda en:
```
https://github.com/TU_USUARIO/work-search-system
```
Ese es el link que compartes. Quien lo quiera usar como skill: descarga, comprime la carpeta con extensión `.skill`, o simplemente usa el archivo `work-search-system.skill` que ya está en tu carpeta Work Search.

---

### Alternativa sin terminal: subir por la web
1. En el repo nuevo, clic en **"uploading an existing file"**.
2. Arrastra el contenido de `work-search-system/` (README.md, SKILL.md, carpetas guias/ plantillas/ scripts/).
3. Commit. Listo.

> Nota: GitHub no renderiza `.xlsx` ni `.skill` en el navegador, pero quedan descargables igual.
