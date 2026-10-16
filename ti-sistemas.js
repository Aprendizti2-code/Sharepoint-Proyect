/* ==========================================================================
   TRANES S.A.S. — Micrositio «TI / Sistemas»
   ARCHIVO DE CONFIGURACIÓN (datos) — separado de la presentación.
   --------------------------------------------------------------------------
   Aquí se concentra TODO lo configurable: enlaces, contactos, guías,
   servicios, equipo y recursos. El diseño se encuentra en ti-sistemas.css
   y el renderizado en ti-sistemas.js.

   ESTADOS:
     status: "ok"      → el dato / enlace está confirmado y tiene destino real.
     status: "pending" → el dato está pendiente de confirmar. En la interfaz se
                         marca claramente y NO se inventa información.

   IMPORTANTE:
     · No se inventan URLs corporativas ni datos de contacto.
     · Los perfiles del equipo marcados con demo: true son ficticios y se
       muestran como demostración hasta recibir los datos oficiales.
     · Al reemplazar un valor por uno real, cambiar status a "ok".
   ========================================================================== */
(function (root) {
  'use strict';

  /* URL real que la intranet ya publica como «Mesa de Ayuda TI (tickets)».
     Se reutiliza el enlace existente (no es una URL nueva inventada). */
  var HELPDESK_URL =
    'https://m365.cloud.microsoft/m365apps/75f31797-37c9-498e-8dc9-53c16a36afca' +
    '?auth=2&home=1&origindomain=microsoft365&client-request-id=19eeea6b-6a4e-407d-900d-0381fd544701';

  root.TI_CONFIG = {

    /* ---------------------------------------------------------------------
       1. IDENTIDAD Y NAVEGACIÓN
       --------------------------------------------------------------------- */
    site: {
      area: 'TI / Sistemas',
      intranetHome: 'index.html',
      /* Ubicación de esta página dentro de la intranet (migas de pan) */
      breadcrumb: ['Intranet Corporativa', 'Nuestras Áreas', 'TI / Sistemas']
    },

    nav: {
      areas: [
        { label: 'Operaciones',        href: 'index.html#area-operaciones' },
        { label: 'Comercial',          href: 'index.html#area-comercial' },
        { label: 'Gestión Humana',     href: 'index.html#area-gh' },
        { label: 'Admon. Servicio',    href: 'index.html#area-admon' },
        { label: 'Flota Propia',       href: 'index.html#area-flota' },
        { label: 'Infraestructura',    href: 'index.html#area-infraestructura' },
        { label: 'Contabilidad',       href: 'index.html#area-contabilidad' },
        { label: 'Financiera',         href: 'index.html#area-financiera' },
        { label: 'TI / Sistemas',      href: 'ti-sistemas.html', current: true },
        { label: 'Control Interno',    href: 'index.html#area-control' },
        { label: 'Calidad / SGI',      href: 'index.html#area-calidad' },
        { label: 'Gerencia',           href: 'index.html#area-gerencia' },
        { label: 'Publicidad & Medios',href: 'index.html#area-publicidad' }
      ],
      formatos: [
        { label: 'Centro de Formatos y Plantillas', href: 'index.html#formatos' },
        { label: 'Formatos de vacaciones',          href: 'index.html#formatos' },
        {
          label: 'Solicitar un formato',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSdNzqqSW8DTCpGlEbX40DQzsx6NaVY5faCV8Gap2fpapu6rFg/viewform?usp=header',
          external: true
        }
      ],
      sgi: [
        { label: 'Sistema de Gestión Integrado (SGI)', href: 'index.html#sgi' }
      ]
    },

    /* ---------------------------------------------------------------------
       2. ENLACES PRINCIPALES
       --------------------------------------------------------------------- */
    links: {
      mesaDeAyuda: {
        status: 'ok',
        href: HELPDESK_URL,
        external: true,
        label: 'Mesa de Ayuda TI'
      },
      /* Tablero corporativo de tickets: mientras se confirma la URL propia
         del tablero de Planner, se reutiliza el canal de tickets ya
         publicado en la intranet. */
      planner: {
        status: 'ok',
        href: HELPDESK_URL,
        external: true,
        label: 'Abrir Planner',
        note: 'Sustituir por la URL directa del tablero corporativo de Planner.'
      },
      centroDeFormatos: {
        status: 'ok',
        href: 'index.html#formatos',
        label: 'Ir al centro de formatos'
      },
      todasLasGuias: {
        status: 'pending',
        href: '',
        label: 'Ver todas las guías',
        note: 'Falta configurar la biblioteca o página donde vivirán todas las guías.'
      }
      /* Canales de contacto retirados junto con la seccion anterior: los correos viven en las tarjetas del equipo. */
    },

    /* ---------------------------------------------------------------------
       3. BANNER PRINCIPAL (HERO)
       --------------------------------------------------------------------- */
    hero: {
      image: 'hero-c.jpg',
      imageAlt:
        'Profesionales de tecnología trabajando frente a computadores en una estación de trabajo corporativa',
      title: { first: 'TI', slash: '/', accent: 'Sistemas' },
      subtitle: 'Tecnología que nos conecta y nos impulsa',
      bullets: ['Soporte', 'Soluciones', 'Seguridad', 'Innovación'],
      lead:
        'En TRANES, el área de TI trabaja para que todos podamos hacer nuestro trabajo de forma segura, eficiente y sin interrupciones.',
      signature: 'Tu trabajo también cuenta con nosotros'
    },

    /* ---------------------------------------------------------------------
       4. ACCESOS RÁPIDOS
       --------------------------------------------------------------------- */
    quickLinks: [
      {
        id: 'planner',
        icon: 'view_kanban',
        color: '#187a52',
        title: 'Crear ticket en Planner',
        desc: 'Reporta tu solicitud de soporte de forma rápida y sencilla.',
        action: 'link',
        linkKey: 'planner'
      },
      {
        id: 'buenas-practicas',
        icon: 'menu_book',
        color: '#1f6fd0',
        title: 'Buenas prácticas TI',
        desc: 'Tips y guías para tu día a día.',
        action: 'anchor',
        href: '#guias'
      },
      {
        id: 'seguridad',
        icon: 'shield',
        color: '#1e232a',
        title: 'Seguridad digital',
        desc: 'Protege tu información y tus equipos.',
        action: 'guide',
        guideId: 'seguridad'
      },
      {
        id: 'equipo',
        icon: 'groups',
        color: '#ff6600',
        title: 'Nuestro equipo',
        desc: 'Habla directamente con quien te puede ayudar.',
        action: 'anchor',
        href: '#equipo'
      }
    ],

    /* ---------------------------------------------------------------------
       5. GUÍAS Y TUTORIALES
       Cada guía es reutilizable: título, categoría, imagen, resumen,
       contenido (steps) y enlace externo opcional.
       --------------------------------------------------------------------- */
    guides: [
      {
        id: 'planner',
        category: 'PLANNER',
        categoryColor: '#ff6600',
        title: 'Cómo crear un ticket en Planner',
        desc: 'Sigue el paso a paso para registrar tu solicitud correctamente.',
        image: 'guide-planner.jpg',
        imageAlt: 'Pantalla de un computador con el tablero de trabajo del ticket',
        cta: 'Ver guía',
        steps: [
          'Abre la Mesa de Ayuda TI desde cualquier acceso de esta página.',
          'Crea una tarea nueva y selecciona el tablero de soporte.',
          'Describe el problema: qué equipo, qué falla y desde cuándo.',
          'Adjunta capturas de pantalla o el mensaje de error exacto.',
          'Guarda la solicitud: recibirás confirmación y un responsable asignado.'
        ],
        link: { status: 'ok', hrefKey: 'planner', label: 'Abrir Planner' },
        video: {
          status: 'ok',
          href: 'https://tranes1.sharepoint.com/:v:/s/Intranet/IQBIFFJ3cpBCRL8CXEwPg322Adp8Mu5PGjfuvnH0bRFQoRI?e=r1FGSA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1QbGF5bGlzdCIsInJlZmVycmFsTW9kZSI6Im1pcyIsInJlZmVycmFsVmlldyI6InBvc3Ryb2xsLWNvcHlsaW5rIiwicmVmZXJyYWxQbGF5YmFja1Nlc3Npb25JZCI6IjQwMDlhMzhiLWI0ZGEtNDg5MS05N2VhLTA2YjIwZTNlZmEzZiJ9fQ%3D%3D',
          label: 'Ver video instructivo'
        },
        doc: {
          status: 'ok',
          href: 'https://tranes1-my.sharepoint.com/:b:/g/personal/auxiliarti_tranes_com_co/IQAJJia7wYvmQbT5OwXdfFHRAS0jdsixXagCAqAbzMKNdGs?e=03FSHM',
          label: 'Ver guía en PDF'
        }
      },
      {
        id: 'funciones',
        category: 'CONÓCENOS',
        categoryColor: '#1f6fd0',
        title: 'Funciones del área de TI',
        desc: 'Conoce todo lo que hacemos por ti y por la empresa.',
        image: 'guide-funciones.jpg',
        imageAlt: 'Pantalla con código y sistemas en desarrollo',
        cta: 'Ver funciones',
        steps: [
          'Soporte técnico de computadores, impresoras y periféricos.',
          'Redes, conectividad, VPN y acceso a sistemas.',
          'Correo, Microsoft 365, Teams y SharePoint.',
          'Protección de la información y prevención de riesgos.',
          'Instalación de software, actualizaciones y licencias.',
          'Proyectos de innovación, automatización y mejora de procesos.'
        ],
        link: { status: 'ok', href: '#servicios', label: 'Ver servicios' }
      },
      {
        id: 'seguridad',
        category: 'SEGURIDAD',
        categoryColor: '#2e7d32',
        title: 'Consejos de seguridad digital',
        desc: 'Evita riesgos y protege tu información.',
        image: 'guide-seguridad.jpg',
        imageAlt: 'Representación de circuitos digitales y protección de datos',
        cta: 'Ver consejos',
        steps: [
          'Usa contraseñas únicas y activa la verificación en dos pasos.',
          'No compartas tus credenciales, ni siquiera con compañeros.',
          'Bloquea tu equipo al ausentarte, aunque sea por pocos minutos.',
          'Verifica remitentes y adjuntos antes de hacer clic o descargar.',
          'No conectes USB de origen desconocido.',
          'Reporta de inmediato cualquier correo o mensaje sospechoso.'
        ],
        link: { status: 'pending', href: '', label: 'Política de seguridad', note: 'Falta enlazar el documento oficial de seguridad de la información.' }
      },
      {
        id: 'firma',
        category: 'TUTORIALES',
        categoryColor: '#1f6fd0',
        title: 'Cómo configurar tu firma de correo',
        desc: 'Personaliza tu firma con los datos y el formato institucional.',
        image: 'guide-firma.jpg',
        imageAlt: 'Icono de aplicación de correo electrónico',
        cta: 'Ver guía',
        steps: [
          'Abre el video instructivo desde esta guía y síguelo paso a paso.',
          'Ten a la mano tu nombre, cargo, sede y datos de contacto.',
          'Configura la firma con tus datos y el formato institucional.',
          'Envía un correo de prueba y verifica que la firma se vea correctamente.'
        ],
        video: {
          status: 'ok',
          href: 'https://tranes1.sharepoint.com/:v:/s/Intranet/IQAxknCfKr13QqDVlAUSEu4uASk_3Grle2wYNIZJaeer2Fk?e=vTFALW&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1QbGF5bGlzdCIsInJlZmVycmFsTW9kZSI6Im1pcyIsInJlZmVycmFsVmlldyI6InBvc3Ryb2xsLWNvcHlsaW5rIiwicmVmZXJyYWxQbGF5YmFja1Nlc3Npb25JZCI6ImNmMzhjYzM0LTk3MjctNGU5YS1hMTM1LTQ0NjFhZTNlMWZkYyJ9fQ%3D%3D',
          label: 'Ver video instructivo'
        }
      }
    ],

    /* ---------------------------------------------------------------------
       6. SERVICIOS — «¿Qué hace el área de TI?»
       --------------------------------------------------------------------- */
    services: [
      {
        icon: 'devices',
        accent: '#ff6600',
        title: 'Soporte técnico de equipos',
        desc: 'Computadores, impresoras y periféricos.'
      },
      {
        icon: 'wifi',
        accent: '#1f6fd0',
        title: 'Redes y conectividad',
        desc: 'Internet, VPN y acceso a sistemas.'
      },
      {
        icon: 'cloud',
        accent: '#1f6fd0',
        title: 'Herramientas corporativas',
        desc: 'Correo, Microsoft 365, Teams, SharePoint y otras herramientas autorizadas.'
      },
      {
        icon: 'security',
        accent: '#ff6600',
        title: 'Seguridad de la información',
        desc: 'Protección de datos y prevención de riesgos.'
      },
      {
        icon: 'app_registration',
        accent: '#1f6fd0',
        title: 'Software y licencias',
        desc: 'Instalaciones, actualizaciones y gestión de licencias.'
      },
      {
        icon: 'lightbulb',
        accent: '#1f6fd0',
        title: 'Proyectos y mejoras',
        desc: 'Innovación, automatización y optimización de procesos.'
      }
    ],

    /* ---------------------------------------------------------------------
       7. EQUIPO — «Nuestro equipo»
       ⚠ DATOS DE DEMOSTRACIÓN: demo: true. Reemplazar por los integrantes
         reales (foto, nombre, cargo, correo y extensión) antes de publicar.
         Cuando exista un correo real: status "ok" + value con la dirección
         y el sistema generará el enlace mailto: automáticamente.
       --------------------------------------------------------------------- */
    team: [
      {
        demo: false,
        photo: 'equipo-lider.jpg',
        photoPosition: 'center 31%',
        photoAlt: 'Retrato de Estiven Álvarez Martínez',
        name: 'Estiven Álvarez Martínez',
        role: 'Líder TI',
        tag: 'Líder',
        tagColor: '#ff6600',
        summary: 'Coordina y monitorea la ejecución de todos los proyectos del área, supervisando el cumplimiento de tiempos, presupuestos y entregables, y velando por la calidad de las soluciones tecnológicas que impulsan el crecimiento de la empresa.',
        specialty: 'Gestión de proyectos tecnológicos',
        email: { status: 'ok', value: 'liderti@tranes.com.co' },
        extension: { status: 'pending', value: null }
      },
      {
        demo: false,
        photo: 'equipo-automatizacion.jpg',
        photoPosition: 'center 27%',
        photoAlt: 'Retrato de Santiago Urrutia Urrutia',
        name: 'Santiago Urrutia Urrutia',
        role: 'Sistemas y Automatización',
        tag: 'Automatización',
        tagColor: '#7b1fa2',
        summary: 'Desarrolla soluciones de software, implementa flujos de automatización en n8n e integra los sistemas informáticos de la empresa, optimizando procesos para elevar la eficiencia operativa y tecnológica de la organización.',
        specialty: 'Sistemas y automatizaciones',
        email: { status: 'ok', value: 'aprendizti@tranes.com.co' },
        extension: { status: 'pending', value: null }
      },
      {
        demo: false,
        photo: 'equipo-redes.jpg',
        photoPosition: 'center 37%',
        photoAlt: 'Retrato de Eliobys Ogaza Cogollo',
        name: 'Eliobys Ogaza Cogollo',
        role: 'Desarrollo y Redes',
        tag: 'Líder Sistemas',
        tagColor: '#2e7d32',
        summary: 'Encargado de la gestión de servidores, configuración de redes y VPN, así como del control y asignación de accesos a las plataformas; asegura la disponibilidad constante y vela por el óptimo rendimiento de todos los sistemas de la organización.',
        specialty: 'Redes, VPN e infraestructura',
        email: { status: 'ok', value: 'auxiliarti@tranes.com.co' },
        extension: { status: 'pending', value: null }
      },
      {
        demo: false,
        photo: 'equipo-desarrollo.jpg',
        photoPosition: 'center 23%',
        photoAlt: 'Retrato de Emmanuel Muñoz Lopez',
        name: 'Emmanuel Muñoz Lopez',
        role: 'Desarrollo Web',
        tag: 'Desarrollo Web',
        tagColor: '#1f6fd0',
        summary: 'Apoya activamente el flujo de desarrollo web mediante la implementación de diseños, la programación de la lógica interna y el mantenimiento de proyectos, combinando esta labor con el soporte y la atención a los requerimientos del área de sistemas.',
        specialty: 'Sitios y aplicaciones web',
        email: { status: 'ok', value: 'Aprendizti2@tranes.com.co' },
        extension: { status: 'pending', value: null }
      }
    ],

    teamNotice: {
      text: 'Perfiles de demostración: fotos y datos ficticios hasta recibir la información oficial del equipo.'
    },

    /* ---------------------------------------------------------------------
       8. PROCESO DE ATENCIÓN
       --------------------------------------------------------------------- */
    process: [
      {
        icon: 'edit_note',
        title: 'Reportas en Planner',
        desc: 'Describe el problema y adjunta la información necesaria.'
      },
      {
        icon: 'search',
        title: 'Revisamos y priorizamos',
        desc: 'Analizamos la solicitud y la asignamos al equipo correspondiente.'
      },
      {
        icon: 'build',
        title: 'Solucionamos',
        desc: 'Trabajamos en la incidencia y te mantenemos informado del avance.'
      },
      {
        icon: 'task_alt',
        title: 'Cerramos',
        desc: 'Confirmamos la solución y damos por finalizada la solicitud.'
      }
    ],

    /* ---------------------------------------------------------------------
       9. CENTRO DE POLÍTICAS
       Cada política muestra su documento cuando esté aprobado (status "ok"
       + href); mientras tanto se marca como pendiente de publicar.
       --------------------------------------------------------------------- */
    policies: [
      {
        icon: 'person',
        title: 'Tratamiento de datos personales',
        desc: 'Cómo recolectamos, usamos y protegemos los datos personales en TRANES.',
        doc: {
          status: 'ok',
          href: 'https://tranes1-my.sharepoint.com/:w:/g/personal/auxiliarti_tranes_com_co/IQAx-3T6ScrYT6V9QvijCXdMAS066TAA2F8G0NVVRY_q748?e=jxfa7K',
          label: 'Ver documento',
          external: true
        }
      },
      {
        icon: 'security',
        title: 'Seguridad de la información',
        desc: 'Reglas para proteger la información y prevenir incidentes de seguridad.',
        doc: {
          status: 'ok',
          href: 'https://tranes1-my.sharepoint.com/:w:/g/personal/auxiliarti_tranes_com_co/IQCGBIXLt_caS6Y9zOFf6WHiAXaDumdw4A82crI9SdaBSmo?e=X9gmW9',
          label: 'Ver documento',
          external: true
        }
      },
      {
        icon: 'laptop',
        title: 'Uso aceptable de herramientas',
        desc: 'Uso correcto del correo, los equipos y las plataformas corporativas.',
        doc: {
          status: 'ok',
          href: 'https://tranes1-my.sharepoint.com/:b:/g/personal/auxiliarti_tranes_com_co/IQBAqYSZvdNvT68C0pioMdE6AV1-6nm8AtGMrhqozCvPJUg?e=H1ioV8',
          label: 'Ver documento',
          external: true
        }
      },
      {
        icon: 'key',
        title: 'Confidencialidad y credenciales',
        desc: 'Manejo de contraseñas, accesos e información confidencial.',
        doc: {
          status: 'ok',
          href: 'https://tranes1-my.sharepoint.com/:w:/g/personal/auxiliarti_tranes_com_co/IQAMOb2OhN-YQIhz5Aab4_0GAZL1tgebCWZ6JmIxZ02ruZM?e=0tEsIM',
          label: 'Ver documento',
          external: true
        }
      }
    ],

    resources: [
      { label: 'Intranet corporativa',   href: 'index.html', status: 'ok' },
      { label: 'Centro de Formatos',     href: 'index.html#formatos', status: 'ok' },
      { label: 'Nuestras Áreas',         href: 'index.html#areas', status: 'ok' },
      { label: 'Sistema de Gestión (SGI)', href: 'index.html#sgi', status: 'ok' },
      { label: 'Aplicaciones corporativas', href: 'index.html#ecosistema', status: 'ok' },
      { label: 'Documentos del área TI (SharePoint)',
        href: 'https://tranes1.sharepoint.com/sites/Intranet/Documentos%20compartidos/Forms/AllItems.aspx?d=wcb74b119df114ecf91ba1bcb0e72edf7&csf=1&web=1&e=XUKYFr&ovuser=50635641%2Dcaed%2D4bd9%2D9636%2Def06f52b9199%2CAprendizti2%40tranes%2Ecom%2Eco&TeamsCID=498f9764%2D4614%2D4d19%2D858e%2D86454789db9f&OR=Teams%2DHL&CT=1791399932276&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNjA5MDMxNTgyMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&CID=e89e42a2%2Df09e%2Df000%2D7d4c%2Db787d52e565d&cidOR=SPO&FolderCTID=0x0120009D626C6DF11AB5438265727F0FFD326C&id=%2Fsites%2FIntranet%2FDocumentos%20compartidos%2FTI',
        status: 'ok' },
      { label: 'Biblioteca de guías TI', href: '', status: 'pending',
        note: 'Pendiente de configurar: biblioteca de guías y manuales del área.' }
    ],

    /* ---------------------------------------------------------------------
       10. PIE DE PÁGINA
       --------------------------------------------------------------------- */
    footer: {
      tagline: 'Intranet Corporativa & Ecosistema Digital | TRANES S.A.S.',
      middleLinks: [
        { label: 'Tecnología', href: '#servicios' },
        { label: 'Personas',   href: '#equipo' },
        { label: 'Transporte', href: 'index.html' }
      ]
    }
  };
})(window);

/* ==========================================================================
   NOTA: datos y presentacion conviven aqui a proposito.
   La CONFIGURACION (antes ti-config.js) va arriba; NO borrar este bloque.
   ========================================================================== */

/* ==========================================================================
   TRANES S.A.S. — Micrositio «TI / Sistemas»
   Renderizado e interacción.
   · Todos los datos llegan desde ti-config.js (separados de la presentación).
   · Los enlaces sin destino real se marcan como «pendientes de configuración»
     y muestran un aviso explícito: no se simula ninguna integración.
   · Reutiliza app.js de la intranet para menús, dropdowns y teclado (Esc).
   ========================================================================== */
(function () {
  'use strict';

  var CFG = window.TI_CONFIG || {};

  /* ------------------------------------------------------------------
     Utilidades
     ------------------------------------------------------------------ */
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function icon(name, cls) {
    return '<span class="material-symbols-outlined' + (cls ? ' ' + cls : '') + '" aria-hidden="true">' + esc(name) + '</span>';
  }

  function isEmpty(list) { return !Array.isArray(list) || list.length === 0; }

  function emptyState(message) {
    return '<div class="ti-empty">' + icon('info') + '<p>' + esc(message) + '</p></div>';
  }


  /* Construye un elemento de acción: <a> cuando hay destino real,
     <button> claramente marcado como pendiente cuando no lo hay. */
  function actionTag(item, cls, inner, extra) {
    var pending = !item || item.status !== 'ok' || !item.href;
    extra = extra || '';
    if (pending) {
      return '<button type="button" class="' + cls + ' is-pending" data-pending="' +
        esc((item && item.note) || 'Enlace pendiente de configuración.') +
        '" title="Pendiente de configuración"' + extra + '>' + inner + '</button>';
    }
    return '<a class="' + cls + '" href="' + esc(item.href) + '"' +
      (item.external ? ' target="_blank" rel="noopener"' : '') + extra + '>' + inner + '</a>';
  }

  /* Hidrata un nodo existente del HTML a partir de config.links[key] */
  function hydrateLink(node) {
    var item = CFG.links ? CFG.links[node.getAttribute('data-link')] : null;
    if (!item) return;
    if (item.status === 'ok' && item.href) {
      node.setAttribute('href', item.href);
      if (item.external) {
        node.setAttribute('target', '_blank');
        node.setAttribute('rel', 'noopener');
      }
      if (item.label) { node.setAttribute('aria-label', item.label); }
    } else {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = node.className + ' is-pending';
      btn.innerHTML = node.innerHTML;
      btn.setAttribute('data-pending', item.note || 'Dato pendiente de configuración.');
      btn.setAttribute('title', 'Pendiente de configuración');
      node.parentNode.replaceChild(btn, node);
    }
  }

  /* ------------------------------------------------------------------
     Aviso transitorio (enlaces / datos pendientes)
     ------------------------------------------------------------------ */
  var toastEl = document.getElementById('ti-toast');
  var toastTimer = null;

  function toast(message) {
    if (!toastEl) return;
    toastEl.innerHTML = icon('info') + '<span>' + esc(message) + '</span>';
    toastEl.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toastEl.classList.remove('show'); }, 4500);
  }

  document.addEventListener('click', function (e) {
    var pendingBtn = e.target.closest('[data-pending]');
    if (pendingBtn) {
      e.preventDefault();
      toast(pendingBtn.getAttribute('data-pending'));
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toastEl) { toastEl.classList.remove('show'); }
  });

  /* ------------------------------------------------------------------
     1. NAVEGACIÓN (menús y perfil)
     ------------------------------------------------------------------ */
  function renderMenu(containerId, items) {
    var box = document.getElementById(containerId);
    if (!box || !Array.isArray(items)) return;
    box.innerHTML = items.map(function (item) {
      var current = item.current ? ' aria-current="page"' : '';
      var ext = item.external ? ' target="_blank" rel="noopener"' : '';
      return '<a href="' + esc(item.href) + '"' + ext + current + ' role="menuitem">' +
        (item.external ? icon('open_in_new') : icon('chevron_right')) +
        esc(item.label) + '</a>';
    }).join('');
  }

  function renderNav() {
    var nav = CFG.nav || {};
    renderMenu('menu-areas', nav.areas);
    renderMenu('menu-formatos', nav.formatos);
    renderMenu('menu-sgi', nav.sgi);
  }

  function setText(id, text) {
    var node = document.getElementById(id);
    if (node && text != null) node.textContent = text;
  }

  /* ------------------------------------------------------------------
     2. ACCESOS RÁPIDOS
     ------------------------------------------------------------------ */
  function renderQuickLinks() {
    var box = document.getElementById('quick-grid');
    if (!box) return;
    if (isEmpty(CFG.quickLinks)) {
      box.innerHTML = emptyState('Aún no hay accesos rápidos configurados. Agrega enlaces en ti-config.js.');
      return;
    }

    box.innerHTML = CFG.quickLinks.map(function (q) {
      var inner =
        '<span class="ti-quick-icon" style="--qi:' + esc(q.color) + '" aria-hidden="true">' + icon(q.icon) + '</span>' +
        '<span class="ti-quick-text"><h3>' + esc(q.title) + '</h3><p>' + esc(q.desc) + '</p></span>' +
        '<span class="ti-arrow" aria-hidden="true">' + icon('arrow_forward') + '</span>';

      var attrs = ' aria-label="' + esc(q.title) + '"';

      if (q.action === 'guide') {
        return '<button type="button" class="ti-quick-card" data-guide="' + esc(q.guideId) + '"' + attrs + '>' + inner + '</button>';
      }
      if (q.action === 'link') {
        return actionTag(CFG.links[q.linkKey], 'ti-quick-card', inner, attrs);
      }
      return '<a class="ti-quick-card" href="' + esc(q.href) + '"' + attrs + '>' + inner + '</a>';
    }).join('');
  }

  /* ------------------------------------------------------------------
     3. GUÍAS Y TUTORIALES
     ------------------------------------------------------------------ */
  function renderGuides() {
    var box = document.getElementById('guide-grid');
    if (!box) return;
    if (isEmpty(CFG.guides)) {
      box.innerHTML = emptyState('No hay guías publicadas en este momento. Pronto encontrarás aquí tutoriales y pasos a paso.');
      return;
    }

    box.innerHTML = CFG.guides.map(function (g) {
      return '<article class="ti-guide-card">' +
        '<button type="button" class="ti-guide-open" data-guide="' + esc(g.id) + '" aria-label="Abrir la guía: ' + esc(g.title) + '">' +
          '<span class="ti-guide-media">' +
            '<img src="' + esc(g.image) + '" alt="' + esc(g.imageAlt || g.title) + '" width="800" height="500" loading="lazy" />' +
          '</span>' +
          '<span class="ti-guide-body">' +
            '<span class="ti-tag" style="--tag-color:' + esc(g.categoryColor || 'var(--orange)') + '">' + esc(g.category) + '</span>' +
            '<h3>' + esc(g.title) + '</h3>' +
            '<p>' + esc(g.desc) + '</p>' +
            '<span class="ti-guide-cta">' + esc(g.cta || 'Ver guía') + icon('arrow_forward') + '</span>' +
          '</span>' +
        '</button>' +
      '</article>';
    }).join('');
  }

  /* Modal de guías */
  var dialog = document.getElementById('ti-dialog');
  var modalScroll = { x: 0, y: 0 };
  var parentScroll = { x: 0, y: 0 };

  function resolveGuideLink(link) {
    if (!link) return null;
    if (link.hrefKey && CFG.links && CFG.links[link.hrefKey]) { return CFG.links[link.hrefKey]; }
    return link;
  }

  function openGuide(id, trigger) {
    if (!dialog || !CFG.guides) return;
    var g = CFG.guides.filter(function (item) { return item.id === id; })[0];
    if (!g) return;

    var img = document.getElementById('dlg-img');
    if (img) { img.src = g.image || ''; img.alt = g.imageAlt || g.title || ''; }

    var tag = document.getElementById('dlg-tag');
    if (tag) {
      tag.textContent = g.category || '';
      tag.style.setProperty('--tag-color', g.categoryColor || 'var(--orange)');
    }

    setText('dlg-title', g.title);
    setText('dlg-desc', g.desc);

    var steps = document.getElementById('dlg-steps');
    if (steps) {
      steps.innerHTML = (g.steps || []).map(function (step) {
        return '<li>' + esc(step) + '</li>';
      }).join('');
      steps.hidden = isEmpty(g.steps);
    }

    var actions = document.getElementById('dlg-actions');
    if (actions) {
      var link = resolveGuideLink(g.link);
      var html = '';
      if (link) {
        html += actionTag(
          link,
          'ti-btn-primary',
          icon('open_in_new') + ' ' + esc(link.label || 'Abrir recurso')
        );
      }
      var extras = [
        { key: 'video', icon: 'play_circle', label: 'Ver video instructivo' },
        { key: 'doc', icon: 'picture_as_pdf', label: 'Ver guía en PDF' }
      ];
      extras.forEach(function (extra) {
        var item = g[extra.key];
        if (!item) return;
        var target = (item.status === 'ok' && item.href)
          ? { status: 'ok', href: item.href, external: true }
          : item;
        html += actionTag(
          target,
          'ti-btn-outline',
          icon(extra.icon) + ' ' + esc(item.label || extra.label)
        );
      });
      html += '<button type="button" class="ti-btn-outline" data-close-dialog>' +
        icon('close') + ' Cerrar</button>';
      actions.innerHTML = html;
    }

    dialog.classList.add('is-active');
  }

  function closeGuide() {
    if (dialog) {
      dialog.classList.remove('is-active');
    }
  }

  /* Cerrar al hacer clic en el fondo del modal */
  if (dialog) {
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) { closeGuide(); }
    });
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-guide]');
    if (trigger) { openGuide(trigger.getAttribute('data-guide'), trigger); return; }
    if (e.target.closest('[data-close-dialog]')) { closeGuide(); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && dialog && dialog.classList.contains('is-active')) {
      closeGuide();
    }
  });

  /* ------------------------------------------------------------------
     4. SERVICIOS
     ------------------------------------------------------------------ */
  function renderServices() {
    var box = document.getElementById('services-grid');
    if (!box) return;
    if (isEmpty(CFG.services)) {
      box.innerHTML = emptyState('Aún no se han configurado los servicios del área.');
      return;
    }
    box.innerHTML = CFG.services.map(function (s) {
      return '<article class="ti-service">' +
        '<span class="ti-service-icon" style="--sa:' + esc(s.accent) + '" aria-hidden="true">' + icon(s.icon) + '</span>' +
        '<div><h3>' + esc(s.title) + '</h3><p>' + esc(s.desc) + '</p></div>' +
      '</article>';
    }).join('');
  }

  /* ------------------------------------------------------------------
     5. EQUIPO
     ------------------------------------------------------------------ */
  function emailNode(member) {
    var email = member.email || {};
    if (email.status === 'ok' && email.value) {
      return '<a href="mailto:' + esc(email.value) + '">' + icon('mail') + esc(email.value) + '</a>';
    }
    if (email.value) {
      return '<span class="ti-member-data" title="Dato de demostración, pendiente de confirmar">' +
        icon('mail') + esc(email.value) + '</span>';
    }
    return '<span class="ti-member-data ti-pending-chip" title="Correo pendiente de confirmar">' +
      icon('pending') + 'Correo pendiente de confirmar</span>';
  }

  function extensionNode(member) {
    var ext = member.extension || {};
    if (ext.status === 'ok' && ext.value) {
      return '<a href="tel:' + esc(String(ext.value).replace(/[^0-9+]/g, '')) + '">' + icon('call') + esc(ext.value) + '</a>';
    }
    if (ext.value) {
      return '<span class="ti-member-data" title="Extensión de demostración">' + icon('call') + esc(ext.value) + '</span>';
    }
    return '';
  }

  function initialsOf(name) {
    var parts = String(name || '').trim().split(/\s+/).filter(Boolean);
    var first = parts.length > 0 ? parts[0].charAt(0) : '';
    var last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
    return ((first + last) || 'TI').toUpperCase();
  }

  function renderTeam() {
    var box = document.getElementById('team-grid');
    if (!box) return;

    var badge = document.getElementById('team-demo-badge');
    var members = CFG.team || [];
    var hasDemo = members.some(function (m) { return !!m.demo; });
    if (badge) { badge.hidden = !hasDemo; }

    if (isEmpty(members)) {
      box.innerHTML = emptyState('El equipo todavía no tiene integrantes publicados. Configure la lista en ti-config.js.');
      return;
    }

    box.innerHTML = members.map(function (m) {
      var contact = emailNode(m);
      var ext = extensionNode(m);
      if (ext) { contact += ext; }

      /* Acción de contacto: mailto solo cuando el correo es real;
         si no, canal oficial configurado (Mesa de Ayuda TI). */
      var action = (m.email && m.email.status === 'ok' && m.email.value)
        ? actionTag({ status: 'ok', href: 'mailto:' + m.email.value }, 'ti-member-action', icon('mail') + ' Escribir a ' + esc(m.name.split(' ')[0]))
        : actionTag(CFG.links ? CFG.links.mesaDeAyuda : null, 'ti-member-action', icon('headset_mic') + ' Contactar');

      var photoHtml;
      if (m.photo) {
        photoHtml = '<img src="' + esc(m.photo) + '" alt="' + esc(m.photoAlt || ('Retrato de ' + m.name)) + '" width="500" height="560" loading="lazy"' + (m.photoPosition ? ' style="object-position:' + esc(m.photoPosition) + '"' : '') + ' />' +
          (m.demo ? '<span class="ti-member-demo">Demo</span>' : '');
      } else {
        photoHtml = '<span class="ti-member-initials" role="img" aria-label="' + esc(m.photoAlt || ('Retrato de ' + m.name)) + ' (foto pendiente)">' + esc(initialsOf(m.name)) + '</span>' +
          '<span class="ti-member-demo ti-member-demo--pending">Foto pendiente</span>';
      }

      return '<article class="ti-member">' +
        '<div class="ti-member-photo">' + photoHtml + '</div>' +
        '<div class="ti-member-body">' +
          '<h3 class="ti-member-name">' + esc(m.name) + '</h3>' +
          '<p class="ti-member-role">' + esc(m.role) + '</p>' +
          '<span class="ti-member-tag" style="--tag-color:' + esc(m.tagColor || 'var(--orange)') + '">' + esc(m.tag) + '</span>' +
          '<p class="ti-member-summary">' + esc(m.summary) + '</p>' +
          '<p class="ti-member-specialty">' + icon('workspace_premium') + '<span>' + esc(m.specialty) + '</span></p>' +
          '<div class="ti-member-contact">' + contact + '</div>' +
          action +
        '</div>' +
      '</article>';
    }).join('');

    var noticeBox = document.getElementById('team-notice');
    if (noticeBox && hasDemo && CFG.teamNotice) {
      noticeBox.innerHTML = icon('info') + '<span>' + esc(CFG.teamNotice.text) + '</span>';
      noticeBox.hidden = false;
    }
  }

  /* ------------------------------------------------------------------
     6. PROCESO DE SOPORTE
     ------------------------------------------------------------------ */
  function renderProcess() {
    var box = document.getElementById('process-steps');
    if (!box) return;
    if (isEmpty(CFG.process)) {
      box.innerHTML = '<li class="ti-step"><p>Proceso de soporte pendiente de configurar.</p></li>';
      return;
    }
    box.innerHTML = CFG.process.map(function (step, i) {
      return '<li class="ti-step">' +
        '<div class="ti-step-top">' +
          '<span class="ti-step-num">' + (i + 1) + '</span>' +
          '<span class="ti-step-icon" aria-hidden="true">' + icon(step.icon) + '</span>' +
        '</div>' +
        '<h3>' + esc(step.title) + '</h3>' +
        '<p>' + esc(step.desc) + '</p>' +
      '</li>';
    }).join('');
  }

  /* ------------------------------------------------------------------
     7. CENTRO DE POLÍTICAS Y RECURSOS
     ------------------------------------------------------------------ */
  function renderPolicies() {
    var box = document.getElementById('policies-grid');
    if (!box) return;
    var items = CFG.policies || [];
    if (isEmpty(items)) {
      box.innerHTML = emptyState('Aún no hay políticas publicadas. Los documentos oficiales aparecerán aquí cuando estén aprobados.');
      return;
    }
    box.innerHTML = items.map(function (p) {
      var action;
      if (p.doc && p.doc.status === 'ok' && p.doc.href) {
        action = '<a class="ti-policy-link" href="' + esc(p.doc.href) + '"' +
          (p.doc.external ? ' target="_blank" rel="noopener"' : '') + '>' +
          icon('open_in_new') + esc(p.doc.label || 'Ver documento') + '</a>';
      } else {
        var note = (p.doc && p.doc.note) || 'Documento pendiente de publicar.';
        action = '<span class="ti-pending-chip" title="' + esc(note) + '">' +
          icon('pending') + 'Pendiente de publicar</span>';
      }
      return '<article class="ti-policy-item">' +
        icon(p.icon) +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p>' + esc(p.desc) + '</p>' +
        action +
      '</article>';
    }).join('');
  }

  function renderResources() {
    var box = document.getElementById('resource-list');
    if (!box) return;
    var items = CFG.resources || [];
    if (isEmpty(items)) {
      box.innerHTML = '<li><span class="ti-pending-chip">' + icon('pending') + 'Sin recursos configurados</span></li>';
      return;
    }
    box.innerHTML = items.map(function (r) {
      var inner = icon('arrow_outward') + esc(r.label);
      if (r.status === 'ok' && r.href) {
        var ext = /^https?:/i.test(r.href);
        return '<li><a href="' + esc(r.href) + '"' +
          (ext ? ' target="_blank" rel="noopener"' : '') + '>' + inner + '</a></li>';
      }
      return '<li><button type="button" class="is-pending" data-pending="' +
        esc(r.note || 'Recurso pendiente de configuración.') + '" title="Pendiente de configuración">' + inner + '</button></li>';
    }).join('');
  }

  /* ------------------------------------------------------------------
     8. PIE DE PÁGINA
     ------------------------------------------------------------------ */
  function renderFooter() {
    var footer = CFG.footer || {};
    setText('footer-tagline', footer.tagline);

    var crumb = document.getElementById('footer-breadcrumb');
    var site = CFG.site || {};
    if (crumb && site.breadcrumb) {
      crumb.innerHTML = site.breadcrumb.map(function (label, i) {
        var isLast = i === site.breadcrumb.length - 1;
        var node = isLast
          ? '<strong>' + esc(label) + '</strong>'
          : '<a href="' + esc(i === 0 ? (site.intranetHome || 'index.html') : 'index.html#areas') + '">' + esc(label) + '</a>';
        return (i > 0 ? icon('chevron_right') : '') + node;
      }).join('');
    }

    var linksBox = document.getElementById('footer-links');
    if (linksBox && Array.isArray(footer.middleLinks)) {
      linksBox.innerHTML = footer.middleLinks.map(function (l, i) {
        return (i > 0 ? '<span class="sep" aria-hidden="true">|</span>' : '') +
          '<a href="' + esc(l.href) + '">' + esc(l.label) + '</a>';
      }).join('');
    }
  }

  /* ------------------------------------------------------------------
     9. BANNER: textos desde configuración
     ------------------------------------------------------------------ */
  function renderHero() {
    var hero = CFG.hero;
    if (!hero) return;

    var media = document.querySelector('.ti-hero-media img');
    if (media && hero.image) {
      media.setAttribute('src', hero.image);
      media.setAttribute('alt', hero.imageAlt || '');
    }

    var bullets = document.querySelector('.ti-hero-bullets');
    if (bullets && Array.isArray(hero.bullets)) {
      bullets.innerHTML = hero.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('');
    }

    setText('hero-lead', hero.lead);

    var script = document.querySelector('.ti-hero-script');
    if (script && hero.signature) { script.textContent = hero.signature; }
  }

  /* ------------------------------------------------------------------
     10. REVELADO DISCRETO AL DESPLAZAR
     ------------------------------------------------------------------ */
  function setupReveal() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    var targets = document.querySelectorAll('.ti-panel, .ti-process, .ti-hero');
    if (!targets.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

    targets.forEach(function (t) {
      t.classList.add('ti-reveal');
      observer.observe(t);
    });

    /* Red de seguridad: si el observador no dispara (contenedor incrustado,
       pestaña en segundo plano), todo queda visible de todos modos. */
    window.setTimeout(function () {
      document.querySelectorAll('.ti-reveal:not(.is-in)').forEach(function (t) {
        t.classList.add('is-in');
      });
    }, 3000);
  }

  /* ------------------------------------------------------------------
     11. AVISO DE ALTURA AL CONTENEDOR (SharePoint: Script Editor / Embed)
     El padre fija la altura del marco; sin estos avisos el contenido se
     corta abajo. Se reenvía ante cualquier cambio (imágenes, fuentes,
     redimensionado) durante los primeros ~60 segundos.
     En la página padre debe existir quien escuche { tranes: 1, height }
     y ajuste la altura del iframe (ver snippet al final del reporte).
     ------------------------------------------------------------------ */
  (function setupEmbedHeight() {
    if (window.parent === window) return; // página completa: nada que avisar

    // Desactivar restauración de scroll del navegador para evitar que cargue a mitad de página
    if ('scrollRestoration' in history) {
      try { history.scrollRestoration = 'manual'; } catch (e) {}
    }
    window.scrollTo(0, 0);

    var lastH = 0, timer = null, count = 0;
    function currentHeight() {
      return Math.ceil(Math.max(
        document.documentElement.scrollHeight,
        document.body ? document.body.scrollHeight : 0
      ));
    }
    function notify() {
      try {
        var h = currentHeight();
        if (Math.abs(h - lastH) < 4) return;
        lastH = h;
        /* Mismo origen (alojado en Site Assets): ajuste directo del iframe,
           sin depender de ningún script en la página padre. */
        try {
          var f = window.parent.document.getElementById('tranesFrame');
          if (f) { f.style.height = h + 'px'; f.style.minHeight = h + 'px'; }
        } catch (errSame) {}
        window.parent.postMessage({ tranes: 1, height: h }, '*');
      } catch (e) {}
    }
    function schedule() {
      window.clearTimeout(timer);
      timer = window.setTimeout(notify, 100);
    }
    window.addEventListener('load', function () {
      window.scrollTo(0, 0);
      notify();
    });
    window.addEventListener('resize', schedule);
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(schedule); }
    if ('ResizeObserver' in window) {
      new ResizeObserver(schedule).observe(document.documentElement);
    }
    if ('MutationObserver' in window) {
      new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true, attributes: true });
    }
    [50, 200, 500, 1000, 2000].forEach(function (ms) {
      window.setTimeout(notify, ms);
    });
    var keepAlive = window.setInterval(function () {
      count += 1;
      notify();
      if (count > 40) window.clearInterval(keepAlive);
    }, 1500);
    notify();
  })();

  /* ------------------------------------------------------------------
     ARRANQUE
     ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    renderNav();
    renderHero();
    renderQuickLinks();
    renderGuides();
    renderServices();
    renderTeam();
    renderProcess();
    renderPolicies();
    renderResources();
    renderFooter();

    /* Enlaces configurados que ya existen en el HTML */
    document.querySelectorAll('[data-link]').forEach(hydrateLink);

    setupReveal();
  });
})();
