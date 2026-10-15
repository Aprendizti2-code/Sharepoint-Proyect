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
      },
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
        doc: { status: 'pending', href: '', label: 'Ver documento', note: 'Documento pendiente de publicar por el área responsable.' }
      },
      {
        icon: 'security',
        title: 'Seguridad de la información',
        desc: 'Reglas para proteger la información y prevenir incidentes de seguridad.',
        doc: { status: 'pending', href: '', label: 'Ver documento', note: 'Documento pendiente de publicar por el área responsable.' }
      },
      {
        icon: 'laptop',
        title: 'Uso aceptable de herramientas',
        desc: 'Uso correcto del correo, los equipos y las plataformas corporativas.',
        doc: { status: 'pending', href: '', label: 'Ver documento', note: 'Documento pendiente de publicar por el área responsable.' }
      },
      {
        icon: 'key',
        title: 'Confidencialidad y credenciales',
        desc: 'Manejo de contraseñas, accesos e información confidencial.',
        doc: { status: 'pending', href: '', label: 'Ver documento', note: 'Documento pendiente de publicar por el área responsable.' }
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
