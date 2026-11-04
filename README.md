# Micrositio de Publicidad y Mercadeo

## Estructura

- `index.html`: página del micrositio.
- `publicidad.css`: estilos propios del área.
- `publicidad.js`: contenido y comportamiento interactivo.
- `assets/`: banner propio, logo, cuatro ilustraciones distintas para las guías y una ilustración del proceso creativo.
- `../styles.css`: estilos base compartidos con la intranet.
- `../micrositios-theme.css` y `../micrositios-theme.js`: preferencia de tema guardada y estilos compartidos del modo oscuro.

Las ilustraciones de las guías se diseñaron para el tema de cada una (solicitudes, identidad de marca, redes y producción audiovisual), en vez de reutilizar fotografías genéricas que no correspondían al contenido.

La intranet y los enlaces existentes siguen entrando por `../publicidad.html`, que redirige a este micrositio. Para publicarlo en SharePoint, conserva la carpeta `publicidad` y su subcarpeta `assets` con sus rutas. Los dos CSS y el JavaScript compartidos se cargan desde la carpeta raíz.
