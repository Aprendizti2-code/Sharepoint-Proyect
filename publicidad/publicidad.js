(function (root) {
  'use strict';

  root.PUB_CONFIG = {

    /* ── Metadatos del área ───────────────────────────────────────────── */
    site: {
      area: 'Publicidad & Medios',
      intranetHome: '../index.html',
      breadcrumb: ['Intranet Corporativa', 'Nuestras Áreas', 'Publicidad & Medios']
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
        { label: 'Publicidad & Medios',href: 'index.html', current: true }
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
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSdNzqqSW8DTCpGlEbX40DQzsx6NaVY5faCV8Gap2fpapu6rFg/viewform?usp=header',
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
        desc: 'Pide piezas gráficas, afiches y material corporativo.',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSdNzqqSW8DTCpGlEbX40DQzsx6NaVY5faCV8Gap2fpapu6rFg/viewform?usp=header',
        external: true
      },
      {
        id: 'manual-marca',
        icon: 'style',
        color: '#1f6fd0',
        title: 'Manual de Marca',
        desc: 'Uso oficial de logos, colores, tipografía y aplicaciones.',
        href: '#guias'
      },
      {
        id: 'redes',
        icon: 'language',
        color: '#187a52',
        title: 'Redes Sociales',
        desc: 'Canales digitales oficiales y plan de difusión institucional.',
        href: '#servicios'
      },
      {
        id: 'equipo',
        icon: 'groups',
        color: '#7b1fa2',
        title: 'Equipo Creativo',
        desc: 'Conoce al equipo encargado de la imagen corporativa.',
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
        desc: 'Pasos y requerimientos para que tu solicitud gráfica sea aprobada y producida a tiempo.',
        image: 'assets/guia-solicitud.png',
        steps: [
          'Diligencia el formulario oficial detallando objetivo, público objetivo y formato requerido.',
          'Adjunta textos finales aprobados y referencias visuales o dimensiones específicas.',
          'Programa la solicitud con al menos 3 días hábiles de anticipación para piezas estándar.',
          'El equipo confirmará recepción formal y programará la primera entrega para revisión.'
        ],
        link: {
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSdNzqqSW8DTCpGlEbX40DQzsx6NaVY5faCV8Gap2fpapu6rFg/viewform?usp=header',
          label: 'Ir al formulario de solicitud'
        }
      },
      {
        id: 'uso-logo',
        category: 'MARCA',
        categoryColor: '#1f6fd0',
        title: 'Uso correcto del logo corporativo',
        desc: 'Normas indispensables para no alterar la proporción, colores y presencia de la marca TRANES.',
        image: 'assets/guia-marca.png',
        steps: [
          'No estirar ni deformar la proporción original del imagotipo o tipografía.',
          'Respetar el área perimetral de seguridad libre de textos u otros gráficos.',
          'Usar exclusivamente los colores autorizados (#ff6600, blanco y negro institucional).',
          'Para rotulación de vehículos o prendas de dotación, solicitar validación previa al área.'
        ],
        link: { href: '#politicas', label: 'Ver manual de identidad' }
      },
      {
        id: 'redes-sociales',
        category: 'REDES',
        categoryColor: '#187a52',
        title: 'Guía de difusión en redes sociales',
        desc: 'Lineamientos de tono de voz, buenas prácticas y protocolo de publicación institucional.',
        image: 'assets/guia-redes.png',
        steps: [
          'Toda comunicación pública externa debe ser canalizada o aprobada por Publicidad & Medios.',
          'Preservar un tono cercano, respetuoso, profesional y centrado en la seguridad y las personas.',
          'Las fotos y videos deben mostrar al personal con uniforme completo y sus respectivos EPP.',
          'No publicar datos sensibles, patentes de clientes ni información operativa confidencial.'
        ],
        link: { href: '#proceso', label: 'Ver proceso creativo' }
      },
      {
        id: 'audiovisual',
        category: 'PRODUCCIÓN',
        categoryColor: '#7b1fa2',
        title: 'Producción fotográfica y de video',
        desc: 'Cómo coordinar sesiones de fotos y videos en patios, sedes operativas y eventos.',
        image: 'assets/guia-audiovisual.png',
        steps: [
          'Solicitar la jornada con mínimo 5 días de anticipación para planear guión y permisos.',
          'Coordinar con SST el acceso seguro a patios o vehículos si se requiere filmación en campo.',
          'Garantizar que los colaboradores en escena hayan firmado el consentimiento de imagen.',
          'El material editado se entregará en las resoluciones optimizadas para cada canal.'
        ],
        link: { href: '#proceso', label: 'Consultar flujo' }
      }
    ],

    /* ── Servicios (6 servicios estándar en 3x2) ─────────────────────── */
    services: [
      {
        icon: 'campaign',
        accent: '#ff6600',
        title: 'Gestión de Medios & Pauta',
        desc: 'Planificación, pauta estratégica y medición de campañas en canales tradicionales y digitales.'
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
        desc: 'Creación de contenido, parrilla mensual y administración de comunidades digitales TRANES.'
      },
      {
        icon: 'psychology',
        accent: '#7b1fa2',
        title: 'Branding & Identidad',
        desc: 'Custodia, evolución y aplicación del manual de marca en vehículos, uniformes e instalaciones.'
      },
      {
        icon: 'record_voice_over',
        accent: '#d97706',
        title: 'Comunicación Interna',
        desc: 'Campañas de cultura, bienestar y divulgación institucional en articulación con Gestión Humana.'
      },
      {
        icon: 'photo_camera',
        accent: '#0e7490',
        title: 'Producción Audiovisual',
        desc: 'Registro fotográfico de flota, coberturas de eventos institucionales y edición de video corporativo.'
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
        tag: 'Publicidad & Medios',
        tagColor: '#ff6600',
        summary: 'Gestión y coordinación de estrategias publicitarias, identidad corporativa y desarrollo de campañas visuales para TRANES.',
        specialty: 'Estrategia de marca, campañas y contenidos',
        email: 'publicidad@tranes.com.co'
      },
      {
        name: 'María Camila Zapata Betancur',
        role: 'Analista de Publicidad',
        image: 'assets/team-camila.jpg',
        photoPos: 'center 46%',
        photoScale: 1.34,
        photoOrigin: 'center 46%',
        initials: 'CZ',
        tag: 'Publicidad & Medios',
        tagColor: '#1f6fd0',
        summary: 'Producción gráfica, piezas publicitarias y gestión de medios para los diferentes canales corporativos internos y externos.',
        specialty: 'Diseño publicitario, medios y contenidos',
        email: 'publicidad@tranes.com.co'
      }
    ],

    /* ── Proceso creativo (4 pasos idénticos al formato de TI) ───────── */
    process: [
      {
        icon: 'edit_note',
        title: 'Recepción del Brief',
        desc: 'Recibimos tu solicitud oficial con objetivos, dimensiones y fechas de entrega requeridas.'
      },
      {
        icon: 'lightbulb',
        title: 'Conceptualización',
        desc: 'El equipo creativo define el concepto visual, la composición y el mensaje clave de la pieza.'
      },
      {
        icon: 'brush',
        title: 'Diseño y Ajustes',
        desc: 'Desarrollo de la propuesta gráfica y revisión colaborativa con el solicitante hasta la aprobación.'
      },
      {
        icon: 'rocket_launch',
        title: 'Publicación y Entrega',
        desc: 'Entrega final de los archivos en alta resolución o publicación en los canales oficiales de TRANES.'
      }
    ],

    /* ── Políticas de marca (4 tarjetas estándar) ────────────────────── */
    policies: [
      {
        icon: 'style',
        title: 'Manual de Identidad Visual',
        desc: 'Guía oficial de colores corporativos (#ff6600), tipografías autorizadas y proporciones de logo.',
        href: '#guias',
        label: 'Consultar directrices'
      },
      {
        icon: 'policy',
        title: 'Manual de Tono y Voz',
        desc: 'Lineamientos de redacción y tratamiento institucional para textos, comunicados y redes sociales.',
        href: '#guias',
        label: 'Ver directrices'
      },
      {
        icon: 'photo_library',
        title: 'Banco de Recursos Oficial',
        desc: 'Archivos vectoriales (.SVG, .PNG), firmas de correo electrónico y fondos corporativos de reunión.',
        href: '#',
        label: 'Acceso a recursos'
      },
      {
        icon: 'security',
        title: 'Política de Redes Sociales',
        desc: 'Código de conducta y directrices para colaboradores sobre publicaciones relacionadas con TRANES.',
        href: '#',
        label: 'Ver política'
      }
    ]
  };

})(window);


/* ==========================================================================
   RENDER ENGINE — Publicidad & Medios
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

})();
