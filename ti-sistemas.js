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

  function resolveGuideLink(link) {
    if (!link) return null;
    if (link.hrefKey && CFG.links && CFG.links[link.hrefKey]) { return CFG.links[link.hrefKey]; }
    return link;
  }

  function openGuide(id) {
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

    if (typeof dialog.showModal === 'function') { dialog.showModal(); }
    else { dialog.setAttribute('open', ''); }
  }

  /* Cerrar al hacer clic en el fondo del modal */
  if (dialog) {
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) { dialog.close(); }
    });
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-guide]');
    if (trigger) { openGuide(trigger.getAttribute('data-guide')); return; }
    if (e.target.closest('[data-close-dialog]') && dialog) { dialog.close(); }
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
  }

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
