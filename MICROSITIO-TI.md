# Micrositio TI / Sistemas — TRANES · Documentación del proyecto

> Página corporativa del área de TI / Sistemas. Sirve como **referencia de
> diseño** para los micrositios de las demás áreas (cada uno tendrá sus
> propias secciones; lo compartido son los tokens, la navegación y el pie).

## 1. Mapa de archivos

| Archivo | Rol | Qué tocar / qué NO tocar |
|---|---|---|
| `ti-sistemas.html` | Estructura (esqueleto). Los contenedores con `id` los llena el JS. | Solo estructura. Los textos van en el JS (config). |
| `ti-sistemas.js` | Datos (bloque `TI_CONFIG` arriba, marcado) + lógica de render. | **Tus ediciones diarias van aquí**, en el bloque de configuración. |
| `ti-sistemas.css` | Apariencia. Reutiliza los tokens de `styles.css`. | Estilos. No dupliques reglas: revisa si existe antes de crear. |
| `app.js`, `styles.css` | Base compartida de la intranet (menús, tokens). | Evita cambios: afectan a todas las páginas. |
| `*.jpg` (raíz) | Imágenes en plano (sin subcarpetas, decisión de despliegue). | Nombres exactos: las rutas no llevan carpeta. |
| `sharepoint-snippet.html` | Código padre de referencia (iframe, hoy sin script). | Solo referencia. El que manda es el pegado en SharePoint. |
| `index.html` | Intranet principal. Entrada al micrositio (menú + tarjeta dual). | Solo sus dos puntos de entrada a TI. |

## 2. Recetas de edición (todo en el bloque `TI_CONFIG` de `ti-sistemas.js`)

- **Cambiar un texto**: edita el campo (`title`, `desc`, `summary`). Recarga.
- **Cambiar un color de etiqueta**: campo `tagColor` (hex, ej. `'#2e7d32'`).
- **Cambiar una foto**: sube la `.jpg` optimizada (~500 px de ancho) y cambia `photo`. Ajusta el encuadre con `photoPosition` (`'center 37%'` = rostro).
- **Agregar una guía**: duplica un bloque del arreglo `guides` con `id` único. Aparece sola en la cuadrícula + modal.
- **Conectar un documento**: en la tarjeta, `doc: { status: 'ok', href: 'URL', label: 'Ver documento', external: true }`.
- **Marcar algo pendiente**: `status: 'pending'` + `note`. La interfaz avisa sola; nada se inventa como real.

> ⚠️ Regla de oro: después de editar llaves `{}` o corchetes `[]`, verifica
> que cada apertura tenga su cierre antes de subir (un cierre perdido vacía
> secciones enteras sin mostrar error visible).

## 3. Flujo de trabajo (git)

```bash
git status            # 1. ¿qué cambió?
git diff              # 2. lee cada línea cambiada
git add -A            # 3. revisa la lista que stagea (¡nada de más!)
git commit -m "..."   # 4. mensaje claro, en español, qué + por qué
git push origin main  # 5. un solo canal (no mezclar con subidas web)
```

## 4. Despliegue en SharePoint (archivos planos, sin carpetas)

1. Biblioteca `micrositio-ti`: sobrescribe `ti-sistemas.html` y `ti-sistemas.js` (y cualquier imagen nueva). Borra archivos que ya no existan en el repo.
2. El iframe del web part apunta a `.../micrositio-ti/ti-sistemas.html` (sin `<script>` padre: la página se auto-ajusta sola al ser mismo origen).
3. Verifica en página **publicada** (no en edición) con `Ctrl + Shift + R`.
4. Si algo "sigue igual" tras un fix: sospecha caché (los `.js/.css` llevan `?v=3`; súbelo al cambiarlos).

## 5. Diagnóstico rápido

| Síntoma | Causa probable | Dónde mirar |
|---|---|---|
| Secciones vacías ("No hay guías…") | No cargó el bloque de datos / error de sintaxis | Consola (F12) + nombres exactos de archivo |
| Página cortada abajo | Altura del iframe desactualizada | Esperar re-aviso, revisar `scrolling="no"` |
| Modal abajo / salto de scroll | Caché vieja o snippet padre viejo | `?v=` actual, snippet actual |
| Imagen rota (icono roto) | Nombre o ubicación distinta | La ruta en el código debe ser idéntica al archivo |

## 6. Glosario (✍️ TU TURNO: completa con tus palabras)

- Iframe:
- Mismo origen (same-origin):
- Caché del navegador + `Ctrl + Shift + R`:
- Commit / push / pull --rebase:
- Conflicto add/add:
- CSP (Content Security Policy):

## 7. Bitácora de cambios (✍️ TU TURNO: anota cada cambio que subas)

| Fecha | Qué cambió | Archivos | Verificado en |
|---|---|---|---|
| | | | |
