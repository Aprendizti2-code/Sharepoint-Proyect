# Retrospectiva del desarrollo — Micrositio TI / Sistemas (✍️ para escribir a mano)

> Objetivo: contar, con tus palabras, qué se construyó, cómo y qué aprendiste.
> Úsala para presentar el trabajo a tu líder o para tu propio archivo.
> Reglas: frases cortas, hechos verificables, sin culpas. Un ejemplo resuelto
> en cada sección te marca el nivel esperado.

## 1. Resumen del proyecto (5–8 líneas)
Qué es, para quién, dónde vive (SharePoint + GitHub Pages como respaldo).
_Ejemplo: "El micrositio centraliza tickets, guías, equipo y políticas del área
de TI de TRANES. Vive embebido en la intranet de SharePoint y su código está
en el repo Sharepoint-Proyect…"_

✍️ Escríbelo aquí:

## 2. Cómo está organizado (arquitectura)
Explica los 3 archivos y la regla de oro (datos arriba en `TI_CONFIG`,
presentación aparte). Menciona por qué se fusionó la config dentro del JS.
_Ejemplo: "Un solo `ti-sistemas.js` contiene datos y lógica para que ningún
archivo se desincronice al subir…"_

✍️ Escríbelo aquí:

## 3. Decisiones técnicas y por qué (mínimo 3)
Formato: decisión → motivo → alternativa descartada.
_Ejemplo: "Archivos planos sin carpeta `assets/`: el diálogo de subida no
acepta carpetas; se descartó mantener subcarpetas porque rompía las rutas…"_

✍️ Tus 3 decisiones:

## 4. Problemas y soluciones (mínimo 3, con causa raíz)
Formato: síntoma → causa raíz → fix → cómo se verificó.
_Ejemplo: "Secciones vacías → faltaban `}` y `],` en la 4.ª política
(error mío en un reemplazo) → se repusieron por líneas y se verificó con
compilador → commit. Lección: verificar sintaxis tras cada edit estructural…"_

✍️ Tus 3 casos (tienes material: modal abajo, salto de scroll, CSP, caché, conflicto add/add):

## 5. Estado actual y pendientes
Qué funciona hoy, qué falta (URLs reales, fotos oficiales, extensión definitiva).
Sé honesto: distingue "terminado" de "pendiente de dato".

✍️ Escríbelo aquí:

## 6. Lo que aprendí (personal, mínimo 5 puntos)
Herramientas, comandos y conceptos que no dominabas al empezar.
_Ejemplo: "`git pull --rebase`, leer un diff, que `display:flex` pisa a
`hidden`, que la CSP bloquea scripts en línea…"_

✍️ Tus 5 puntos:

## 7. Checklist de entrega (márcalos al verificar)
- [ ] Publicado y visible completo en página publicada (no edición)
- [ ] Sin consola con errores en F12
- [ ] Modal centrado, sin salto de scroll
- [ ] Equipo, guías y políticas con datos reales
- [ ] `git status` limpio y remoto al día
