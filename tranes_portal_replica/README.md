# TRÁNES — Réplica visual para futura migración a SPFx

Esta es una primera réplica funcional del diseño entregado. Está hecha con HTML, CSS y JavaScript puro para que podamos validarla visualmente antes de convertirla a SharePoint Framework (SPFx).

## Cómo verla

1. Descomprime el ZIP.
2. Abre `index.html` en Chrome/Edge.
3. Prueba el menú, tarjetas y botones.

No necesita servidor ni instalación de Node para esta primera maqueta.

## Qué ya está preparado

- Header estilo Microsoft 365 / SharePoint.
- Navegación principal.
- Hero.
- Accesos rápidos.
- Tres tarjetas principales.
- Comunicaciones internas.
- Nuestras Áreas.
- Centro de Formatos.
- Sidebar con Nuestra Gente, encuesta y calendario.
- Footer.
- Responsive para tablet/móvil.
- Botones con eventos preparados para sustituir los mensajes de demostración por URLs, formularios o listas reales.

## Siguiente fase

Cuando validemos el aspecto:

1. Crear proyecto SPFx.
2. Pasar componentes a React/TypeScript.
3. Convertir estilos a SCSS modules.
4. Sustituir los datos estáticos por SharePoint Lists/Libraries.
5. Conectar formularios y documentos.
6. Empaquetar `.sppkg`.
7. Desplegar en el App Catalog.
