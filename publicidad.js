(function (root) {
  'use strict';

  var solicitudPiezaUrl = 'https://forms.cloud.microsoft/r/9v1tzA7sRX?origin=lprLink';

  root.PUB_CONFIG = {

    /* ── Metadatos del área ───────────────────────────────────────────── */
    site: {
      area: 'Publicidad y Mercadeo',
      intranetHome: '../index.html',
      breadcrumb: ['Intranet Corporativa', 'Nuestras Áreas', 'Publicidad y Mercadeo']
    },

    /* ── Menús de navegación ──────────────────────────────────────────── */
    nav: {
      areas: [
        { label: 'Operaciones',        href: '../index.html#area-operaciones' },
        { label: 'Comercial',          href: '../index.html#area-comercial' },
        { label: 'Gestión Humana',     href: '../gestion-humana.html' },
        { label: 'Admon. Servicio',    href: '../index.html#area-admon' },
        { label: 'Flota Propia',       href: '../index.html#area-flota' },
        { label: 'Infraestructura',    href: '../index.html#area-infraestructura' },
        { label: 'Contabilidad',       href: '../index.html#area-contabilidad' },
        { label: 'Financiera',         href: '../index.html#area-financiera' },
        { label: 'TI / Sistemas',      href: '../ti-sistemas.html' },
        { label: 'Control Interno',    href: '../index.html#area-control' },
        { label: 'Calidad / SGI',      href: '../index.html#area-calidad' },
        { label: 'Gerencia',           href: '../index.html#area-gerencia' },
        { label: 'Publicidad y Mercadeo', href: 'index.html', current: true }
      ],
      formatos: [
        { label: 'Centro de Formatos y Plantillas', href: '../index.html#formatos' },
        { label: 'Formatos de vacaciones',          href: '../index.html#formatos' },
        { label: 'Solicitar un formato', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdNzqqSW8DTCpGlEbX40DQzsx6NaVY5faCV8Gap2fpapu6rFg/viewform?usp=header', external: true }
      ],
      sgi: [
        { label: 'Sistema de Gestión Integrado (SGI)', href: '../index.html#sgi' }
      ]
    },

    links: {
      solicitudDiseno: {
        href: solicitudPiezaUrl,
        label: 'Solicitar Diseño'
      }
    },

    /* ── 4 Accesos Rápidos (igual que TI) ────────────────────────────── */
    quickLinks: [
      {
        id: 'solicitud',
        icon: 'palette',
        color: '#ff6600',
        title: 'Solicitud de Diseño',
        desc: 'Solicite piezas gráficas, afiches y material corporativo.',
        href: solicitudPiezaUrl,
        external: true
      },
      {
        id: 'manual-marca',
        icon: 'style',
        color: '#1f6fd0',
        title: 'Manual de Marca',
        desc: 'Consulte los lineamientos oficiales de logotipos, colores, tipografía y aplicaciones.',
        href: '#guias'
      },
      {
        id: 'redes',
        icon: 'language',
        color: '#187a52',
        title: 'Redes Sociales',
        desc: 'Consulte los canales digitales oficiales y el plan de difusión institucional.',
        href: '#servicios'
      },
      {
        id: 'equipo',
        icon: 'groups',
        color: '#7b1fa2',
        title: 'Equipo Creativo',
        desc: 'Conozca al equipo responsable de la imagen corporativa.',
        href: '#equipo'
      }
    ],

    /* ── 4 Guías (con imágenes reales del proyecto) ──────────────────── */
    guides: [
      {
        id: 'como-solicitar',
        category: 'PROCESOS',
        categoryColor: '#ff6600',
        title: 'Cómo solicitar una pieza gráfica',
        desc: 'Pasos y requisitos para que su solicitud gráfica pueda desarrollarse a tiempo.',
        image: 'assets/guia-solicitud.png',
        steps: [
          'Diligencie el formulario oficial e indique el objetivo, el público y el formato requerido.',
          'Adjunte los textos finales aprobados, referencias visuales y dimensiones específicas.',
          'Programe la solicitud con al menos 3 días hábiles de anticipación para piezas estándar.',
          'El equipo confirmará recepción formal y programará la primera entrega para revisión.'
        ],
        link: {
          href: solicitudPiezaUrl,
          label: 'Ir al formulario de solicitud'
        }
      },
      {
        id: 'uso-logo',
        category: 'MARCA',
        categoryColor: '#1f6fd0',
        title: 'Uso correcto del logo corporativo',
        desc: 'Lineamientos para aplicar correctamente el logotipo, los colores y la identidad visual de TRANES.',
        image: 'assets/guia-marca.png',
        steps: [
          'No estire ni deforme las proporciones originales del logotipo.',
          'Respete el área de seguridad y manténgala libre de textos u otros gráficos.',
          'Use los colores autorizados: naranja corporativo (#FF6600), blanco y negro institucional.',
          'Solicite validación del área antes de aplicar la marca en vehículos o prendas de dotación.'
        ],
        link: { href: '#politicas', label: 'Ver manual de identidad' }
      },
      {
        id: 'redes-sociales',
        category: 'REDES',
        categoryColor: '#187a52',
        title: 'Guía de difusión en redes sociales',
        desc: 'Lineamientos de tono de voz, buenas prácticas y protocolo para publicaciones institucionales.',
        image: 'assets/guia-redes.png',
        steps: [
          'Canalice o solicite aprobación de Publicidad y Mercadeo para toda comunicación pública externa.',
          'Mantenga un tono cercano, respetuoso y profesional, centrado en la seguridad y las personas.',
          'Asegúrese de que el personal aparezca con uniforme completo y los elementos de protección requeridos.',
          'No publique datos sensibles, placas de vehículos de clientes ni información operativa confidencial.'
        ],
        link: { href: '#proceso', label: 'Ver proceso creativo' }
      },
      {
        id: 'audiovisual',
        category: 'PRODUCCIÓN',
        categoryColor: '#7b1fa2',
        title: 'Producción fotográfica y de video',
        desc: 'Conozca cómo coordinar sesiones de fotos y videos en patios, sedes operativas y eventos.',
        image: 'assets/guia-audiovisual.png',
        steps: [
          'Solicite la jornada con mínimo 5 días de anticipación para planear el guion y los permisos.',
          'Coordine con SST el acceso seguro a patios o vehículos si se requiere filmación en campo.',
          'Verifique que los colaboradores participantes hayan firmado el consentimiento de uso de imagen.',
          'El material editado se entregará optimizado para los canales definidos.'
        ],
        link: { href: '#proceso', label: 'Consultar flujo' }
      }
    ],

    /* ── Servicios (6 servicios estándar en 3x2) ─────────────────────── */
    services: [
      {
        icon: 'campaign',
        accent: '#ff6600',
        title: 'Gestión de Medios y Pauta',
        desc: 'Planificación, ejecución estratégica y medición de resultados de campañas en canales tradicionales y digitales.'
      },
      {
        icon: 'brush',
        accent: '#1f6fd0',
        title: 'Diseño Gráfico Publicitario',
        desc: 'Desarrollo de piezas visuales, afiches, presentaciones ejecutivas y material POP corporativo.'
      },
      {
        icon: 'language',
        accent: '#187a52',
        title: 'Gestión de Redes Sociales',
        desc: 'Creación de contenido, elaboración de la parrilla mensual y administración de las comunidades digitales de TRANES.'
      },
      {
        icon: 'psychology',
        accent: '#7b1fa2',
        title: 'Branding e Identidad',
        desc: 'Custodia, evolución y aplicación del manual de marca en vehículos, uniformes e instalaciones.'
      },
      {
        icon: 'record_voice_over',
        accent: '#d97706',
        title: 'Comunicación Interna',
        desc: 'Diseño y ejecución de campañas de cultura, bienestar y divulgación institucional, en articulación con Gestión Humana.'
      },
      {
        icon: 'photo_camera',
        accent: '#0e7490',
        title: 'Producción Audiovisual',
        desc: 'Registro fotográfico de la flota, cobertura de eventos institucionales y edición de video corporativo.'
      }
    ],

    /* ── Equipo creativo ───────────────────────────────────────────── */
    team: [
      {
        name: 'Luisa Fernanda García Arrubla',
        role: 'Analista de Publicidad',
        image: 'assets/team-luisa.jpg',
        photoPos: 'center 20%',
        photoScale: 1.05,
        photoOrigin: 'center 25%',
        initials: 'LG',
        tag: 'Publicidad y Mercadeo',
        tagColor: '#ff6600',
        summary: 'Gestión y coordinación de estrategias publicitarias, identidad corporativa y desarrollo de campañas visuales para TRANES.',
        specialty: 'Estrategia de marca, campañas y contenidos',
        email: 'publicidad@tranes.com.co'
      },
      {
        name: 'María Camila Zapata Betancur',
        role: 'Comunicadora social y audiovisual',
        image: 'assets/team-camila.jpg',
        photoPos: 'center 46%',
        photoScale: 1.34,
        photoOrigin: 'center 46%',
        initials: 'CZ',
        tag: 'Publicidad y Mercadeo',
        tagColor: '#1f6fd0',
        summary: 'Crea contenidos y piezas audiovisuales que comunican la identidad de TRANES, y apoya la producción y difusión de mensajes para los canales internos y externos.',
        specialty: 'Comunicación corporativa, producción audiovisual y contenidos',
        email: 'publicidad@tranes.com.co'
      }
    ],

    /* ── Proceso creativo ───────────────────────────────────────────── */
    process: [
      {
        icon: 'edit_note',
        title: 'Recepción del brief',
        desc: 'Recibimos su solicitud formal con los objetivos, las dimensiones y las fechas de entrega requeridas.'
      },
      {
        icon: 'lightbulb',
        title: 'Conceptualización',
        desc: 'El equipo creativo define el concepto visual, la composición y el mensaje clave de la pieza.'
      },
      {
        icon: 'brush',
        title: 'Diseño y ajustes',
        desc: 'Desarrollamos la propuesta gráfica y la revisamos de manera colaborativa con usted hasta obtener su aprobación.'
      },
      {
        icon: 'rocket_launch',
        title: 'Publicación y entrega',
        desc: 'Entregamos los archivos finales en alta resolución o publicamos la pieza en los canales oficiales de TRANES.'
      }
    ],

    /* ── Políticas de marca (4 tarjetas estándar) ────────────────────── */
    policies: [
      {
        icon: 'style',
        title: 'Manual de Identidad Visual',
        desc: 'Guía oficial de colores corporativos (#FF6600), tipografías autorizadas y proporciones del logotipo.',
        href: '#guias',
        label: 'Consultar directrices'
      },
      {
        icon: 'policy',
        title: 'Manual de Tono y Voz',
        desc: 'Lineamientos de redacción y tratamiento institucional aplicables a textos, comunicados y redes sociales.',
        href: '#guias',
        label: 'Ver directrices'
      },
      {
        icon: 'photo_library',
        title: 'Banco de Recursos Oficial',
        desc: 'Solicite acceso a los archivos vectoriales (.SVG, .PNG), las firmas de correo y los fondos corporativos para reuniones.',
        href: 'mailto:publicidad@tranes.com.co?subject=Solicitud%20de%20acceso%20al%20banco%20de%20recursos',
        label: 'Solicitar acceso'
      },
      {
        icon: 'security',
        title: 'Política de Redes Sociales',
        desc: 'Código de conducta y directrices para colaboradores sobre publicaciones relacionadas con TRANES.',
        href: '#guias',
        label: 'Ver política'
      }
    ]
  };

})(window);


/* ==========================================================================
   RENDER ENGINE — Publicidad y Mercadeo
   ========================================================================== */
(function () {
  'use strict';
  var CFG = window.PUB_CONFIG || {};

  function esc(v) {
    return String(v == null ? '' : v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function icon(name) {
    return '<span class="material-symbols-outlined" aria-hidden="true">' + esc(name) + '</span>';
  }
  function el(id) { return document.getElementById(id); }

  /* ── Menús ────────────────────────────────────────────────────────── */
  function renderMenu(containerId, items) {
    var box = el(containerId);
    if (!box || !Array.isArray(items)) return;
    box.innerHTML = items.map(function (item) {
      var cur = item.current ? ' aria-current="page" class="current"' : '';
      var ext = item.external ? ' target="_blank" rel="noopener"' : '';
      return '<a href="' + esc(item.href) + '"' + cur + ext + ' role="menuitem">' +
             icon('chevron_right') + esc(item.label) + '</a>';
    }).join('');
  }

  /* ── Accesos Rápidos ─────────────────────────────────────────────── */
  function renderQuickLinks() {
    var box = el('quick-grid');
    if (!box) return;
    box.innerHTML = (CFG.quickLinks || []).map(function (q) {
      var ext = q.external ? ' target="_blank" rel="noopener"' : '';
      return '<a class="pub-quick-card" href="' + esc(q.href || '#') + '"' + ext + '>' +
        '<span class="pub-quick-icon" style="--qi:' + esc(q.color) + '">' + icon(q.icon) + '</span>' +
        '<span class="pub-quick-text"><h3>' + esc(q.title) + '</h3><p>' + esc(q.desc) + '</p></span>' +
        '<span class="pub-arrow">' + icon('arrow_forward') + '</span>' +
        '</a>';
    }).join('');
  }

  /* ── Guías ───────────────────────────────────────────────────────── */
  function renderGuides() {
    var box = el('guide-grid');
    if (!box) return;
    box.innerHTML = (CFG.guides || []).map(function (g, i) {
      return '<article class="pub-guide-card">' +
        '<button type="button" class="pub-guide-open" onclick="pubOpenGuide(' + i + ')" aria-label="Abrir guía: ' + esc(g.title) + '">' +
          '<span class="pub-guide-media"><img src="' + esc(g.image) + '" alt="' + esc(g.title) + '" loading="lazy"></span>' +
          '<span class="pub-guide-body">' +
            '<span class="pub-tag" style="--tag-color:' + esc(g.categoryColor) + '">' + esc(g.category) + '</span>' +
            '<h3>' + esc(g.title) + '</h3>' +
            '<p>' + esc(g.desc) + '</p>' +
            '<span class="pub-guide-cta">Ver guía ' + icon('arrow_forward') + '</span>' +
          '</span>' +
        '</button>' +
        '</article>';
    }).join('');
  }

  /* ── Servicios ───────────────────────────────────────────────────── */
  function renderServices() {
    var box = el('services-grid');
    if (!box) return;
    box.innerHTML = (CFG.services || []).map(function (s) {
      return '<article class="pub-service">' +
        '<span class="pub-service-icon" style="--sa:' + esc(s.accent) + '">' + icon(s.icon) + '</span>' +
        '<div><h3>' + esc(s.title) + '</h3><p>' + esc(s.desc) + '</p></div>' +
        '</article>';
    }).join('');
  }

  /* ── Equipo Creativo ─────────────────────────────────────────────── */
  function renderTeam() {
    var box = el('team-grid');
    if (!box) return;
    var team = CFG.team || [];
    box.classList.toggle('pub-team-grid--solo', team.length === 1);
    box.classList.toggle('pub-team-grid--pair', team.length === 2);
    box.innerHTML = team.map(function (m) {
      var imgStyle = [];
      if (m.photoPos) imgStyle.push('object-position: ' + m.photoPos);
      if (m.photoScale) imgStyle.push('transform: scale(' + m.photoScale + ')');
      if (m.photoOrigin) imgStyle.push('transform-origin: ' + m.photoOrigin);

      var photoHtml = m.image
        ? '<img src="' + esc(m.image) + '" alt="Foto de ' + esc(m.name) + '" loading="lazy"' + (imgStyle.length ? ' style="' + imgStyle.join('; ') + ';"' : '') + '>'
        : '<div class="pub-member-initials">' + esc(m.initials) + '</div><span class="pub-member-demo">Foto pendiente</span>';

      return '<article class="pub-member">' +
        '<div class="pub-member-photo">' +
          photoHtml +
        '</div>' +
        '<div class="pub-member-body">' +
          '<h3 class="pub-member-name">' + esc(m.name) + '</h3>' +
          '<p class="pub-member-role">' + esc(m.role) + '</p>' +
          '<span class="pub-member-tag" style="--tag-color:' + esc(m.tagColor) + '">' + esc(m.tag) + '</span>' +
          '<p class="pub-member-summary">' + esc(m.summary) + '</p>' +
          '<p class="pub-member-specialty">' + icon('verified') + ' <span>' + esc(m.specialty) + '</span></p>' +
          '<div class="pub-member-contact">' +
            '<a href="mailto:' + esc(m.email) + '">' + icon('mail') + ' ' + esc(m.email) + '</a>' +
          '</div>' +
          '<a href="mailto:' + esc(m.email) + '" class="pub-member-action">' + icon('chat') + ' Contactar</a>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ── Proceso ─────────────────────────────────────────────────────── */
  function renderProcess() {
    var box = el('process-steps');
    if (!box) return;
    box.innerHTML = (CFG.process || []).map(function (step, i) {
      return '<li class="pub-step">' +
        '<div class="pub-step-top">' +
          '<span class="pub-step-num">' + (i + 1) + '</span>' +
          '<span class="pub-step-icon">' + icon(step.icon) + '</span>' +
        '</div>' +
        '<h3>' + esc(step.title) + '</h3>' +
        '<p>' + esc(step.desc) + '</p>' +
        '</li>';
    }).join('');
  }

  /* ── Políticas ───────────────────────────────────────────────────── */
  function renderPolicies() {
    var box = el('policies-grid');
    if (!box) return;
    box.innerHTML = (CFG.policies || []).map(function (p) {
      return '<article class="pub-policy-item">' +
        icon(p.icon) +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p>' + esc(p.desc) + '</p>' +
        '<a class="pub-policy-link" href="' + esc(p.href) + '">' +
          icon('arrow_forward') + ' ' + esc(p.label) +
        '</a>' +
        '</article>';
    }).join('');
  }

  /* ── Modal de Guías ──────────────────────────────────────────────── */
  window.pubOpenGuide = function (idx) {
    var g = (CFG.guides || [])[idx];
    if (!g) return;

    el('modal-title').textContent = g.title;
    el('modal-desc').textContent = g.desc;

    var tag = el('modal-tag');
    tag.textContent = g.category;
    tag.style.background = g.categoryColor;

    var img = el('modal-img');
    img.src = g.image;
    img.alt = g.title;

    var steps = el('modal-steps');
    steps.innerHTML = (g.steps || []).map(function (s) {
      return '<li>' + esc(s) + '</li>';
    }).join('');

    var isExt = g.link.href.startsWith('http');
    var target = isExt ? ' target="_blank" rel="noopener"' : '';
    el('modal-actions').innerHTML =
      '<a class="pub-btn-primary" href="' + esc(g.link.href) + '"' + target + '>' +
        icon('open_in_new') + ' ' + esc(g.link.label) +
      '</a>' +
      '<button type="button" class="pub-btn-secondary" onclick="pubCloseGuide()">' +
        icon('close') + ' Cerrar' +
      '</button>';

    el('guide-modal').classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  window.pubCloseGuide = function () {
    el('guide-modal').classList.remove('is-active');
    document.body.style.overflow = '';
  };

  /* ── Listeners ───────────────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.pubCloseGuide();
  });

  var overlay = el('guide-modal');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) window.pubCloseGuide();
    });
  }

  /* ── Bootstrap ───────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    renderMenu('menu-areas', CFG.nav.areas);
    renderMenu('menu-formatos', CFG.nav.formatos);
    renderMenu('menu-sgi', CFG.nav.sgi);
    renderQuickLinks();
    renderGuides();
    renderServices();
    renderTeam();
    renderProcess();
    renderPolicies();
  });

  /* ── Notificador de altura al iframe padre (SharePoint Modern Script Editor) ── */
  (function () {
    var lastH = 0;
    function notify() {
      try {
        if (window.parent === window) return;
        var h = Math.ceil(Math.max(
          document.documentElement.scrollHeight,
          document.body ? document.body.scrollHeight : 0
        ));
        if (Math.abs(h - lastH) < 6) return;
        lastH = h;
        try {
          var f = window.parent.document.getElementById('tranesFrame');
          if (f) { f.style.height = h + 'px'; f.style.minHeight = h + 'px'; }
        } catch (errSame) {}
        window.parent.postMessage({ tranes: 1, height: h }, '*');
      } catch (e) {}
    }
    window.addEventListener('load', notify);
    window.addEventListener('resize', notify);
    setInterval(notify, 1500);
  })();

})();
