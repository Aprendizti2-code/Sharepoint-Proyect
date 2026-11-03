// ============================================
// TRANES S.A.S. — Intranet Corporativa
// JavaScript: Navegación, Dropdowns, Buscador y Preferencias
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------
  // 1. MENÚ HAMBURGUESA (MÓVIL)
  // ------------------------------------------
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navlinks = document.querySelector('.navlinks');

  if (mobileToggle && navlinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navlinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.querySelector('.material-symbols-outlined').textContent = isOpen ? 'close' : 'menu';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // ------------------------------------------
  // 2. DROPDOWNS — Click Toggle (touch-friendly)
  // ------------------------------------------
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = dropdown.classList.contains('open');

      // Cerrar otros dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('open');
          const btn = d.querySelector('.dropdown-toggle');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      dropdown.classList.toggle('open', !wasOpen);
      toggle.setAttribute('aria-expanded', !wasOpen);
    });
  });

  // Cerrar dropdowns al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Cerrar nav móvil al hacer clic en un enlace
  if (navlinks) {
    navlinks.querySelectorAll(':scope > a').forEach(link => {
      link.addEventListener('click', () => {
        if (navlinks.classList.contains('open')) {
          navlinks.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
          document.body.style.overflow = '';
        }
      });
    });
  }

  // ------------------------------------------
  // 3. BUSCADOR DE FORMATOS (Tiempo Real)
  // ------------------------------------------
  const searchInput = document.getElementById('fmt-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const formatCards = document.querySelectorAll('.fmt-btn-card');
      
      formatCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) {
          card.classList.remove('hidden-format');
        } else {
          card.classList.add('hidden-format');
        }
      });
    });
  }

  // ------------------------------------------
  // 4. BOTONES CON DATA-SHAREPOINT-ID
  // ------------------------------------------
  document.querySelectorAll('.fmt-btn-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const spId = btn.getAttribute('data-sharepoint-id');
      console.log('Conectando con SharePoint ID: ' + spId);
    });
  });

  // ------------------------------------------
  // 5. SMOOTH SCROLL PARA ENLACES INTERNOS
  // ------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ------------------------------------------
  // 6. QUICK ITEMS — Navegación interna
  // ------------------------------------------
  document.querySelectorAll('.quick-item').forEach(item => {
    item.addEventListener('click', () => {
      const label = item.querySelector('span:last-child')?.textContent.trim();
      console.log('Acceso rápido: ' + label);
    });
  });

  // ------------------------------------------
  // 7. PREFERENCIAS: MODO CLARO / OSCURO / ACCESIBILIDAD
  // ------------------------------------------
  const store = {
    get(key) { try { return window.localStorage.getItem(key); } catch (err) { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch (err) {} },
    del(key) { try { window.localStorage.removeItem(key); } catch (err) {} }
  };

  const applyTheme = (theme) => {
    const value = theme || 'default';
    if (value === 'default') document.body.removeAttribute('data-theme');
    else document.body.setAttribute('data-theme', value);

    document.querySelectorAll('.theme-opt').forEach(b => {
      b.classList.toggle('is-active', b.getAttribute('data-theme') === value);
    });
  };

  const applyTextSize = (level) => {
    const value = String(level === undefined ? 0 : level);
    document.body.classList.remove('font-large', 'font-xlarge');
    if (value === '1') document.body.classList.add('font-large');
    if (value === '2') document.body.classList.add('font-xlarge');

    document.querySelectorAll('[data-textsize]').forEach(b => {
      const active = b.getAttribute('data-textsize') === value;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active);
    });
  };

  const applyContrast = (on) => {
    document.body.classList.toggle('high-contrast', !!on);
    document.querySelectorAll('[data-contrast]').forEach(i => { i.checked = !!on; });
  };

  const applyClassic = (on) => {
    document.body.classList.toggle('classic-buttons', !!on);
    const toggle = document.getElementById('opt-classic');
    if (toggle) toggle.checked = !!on;
  };

  const textSizeLevel = () => parseInt(store.get('tranes-textsize') || '0', 10);

  // Escuchadores de preferencias
  document.querySelectorAll('.theme-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute('data-theme');
      applyTheme(value);
      store.set('tranes-theme', value);
    });
  });

  document.querySelectorAll('[data-textsize]').forEach(btn => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute('data-textsize');
      applyTextSize(value);
      store.set('tranes-textsize', value);
    });
  });

  document.querySelectorAll('[data-contrast]').forEach(input => {
    input.addEventListener('change', () => {
      applyContrast(input.checked);
      store.set('tranes-contrast', input.checked ? '1' : '0');
    });
  });

  const classicToggle = document.getElementById('opt-classic');
  if (classicToggle) {
    classicToggle.addEventListener('change', () => {
      applyClassic(classicToggle.checked);
      store.set('tranes-classic', classicToggle.checked ? '1' : '0');
    });
  }

  // Carga inicial guardada
  applyTheme(store.get('tranes-theme') || 'default');
  applyTextSize(store.get('tranes-textsize') || '0');
  applyContrast(store.get('tranes-contrast') === '1');
  applyClassic(store.get('tranes-classic') === '1');

  const resetBtn = document.getElementById('opt-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      applyTheme('default');
      applyTextSize('0');
      applyContrast(false);
      applyClassic(false);
      ['tranes-theme', 'tranes-textsize', 'tranes-contrast', 'tranes-classic'].forEach(k => store.del(k));
    });
  }

  // ------------------------------------------
  // 8. BARRA DE ACCESIBILIDAD FLOTANTE
  // ------------------------------------------
  const a11yToggle = document.querySelector('.a11y-toggle');
  const a11yPanel = document.querySelector('.a11y-panel');

  if (a11yToggle && a11yPanel) {
    a11yToggle.addEventListener('click', () => {
      const isOpen = a11yPanel.classList.toggle('show');
      a11yToggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.a11y-toolbar')) {
        a11yPanel.classList.remove('show');
        a11yToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.querySelectorAll('.a11y-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');

        if (action === 'contrast') {
          const next = !document.body.classList.contains('high-contrast');
          applyContrast(next);
          store.set('tranes-contrast', next ? '1' : '0');
        } else if (action === 'fontsize-increase') {
          const next = Math.min(textSizeLevel() + 1, 2);
          applyTextSize(next);
          store.set('tranes-textsize', String(next));
        } else if (action === 'fontsize-decrease') {
          const next = Math.max(textSizeLevel() - 1, 0);
          applyTextSize(next);
          store.set('tranes-textsize', String(next));
        } else if (action === 'reset') {
          applyTextSize(0);
          applyContrast(false);
          store.del('tranes-textsize');
          store.del('tranes-contrast');
        }
      });
    });
  }

  // ------------------------------------------
  // 9. PANEL DE CONFIGURACIÓN SUPERIOR
  // ------------------------------------------
  const closeTopPanels = () => {
    document.querySelectorAll('.topbar-panel.show').forEach(panel => {
      panel.classList.remove('show');
      const owner = document.querySelector('[data-panel="' + panel.id + '"]');
      if (owner) owner.setAttribute('aria-expanded', 'false');
    });
  };

  document.querySelectorAll('[data-panel]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const panel = document.getElementById(btn.getAttribute('data-panel'));
      if (!panel) return;

      const willOpen = !panel.classList.contains('show');
      closeTopPanels();
      panel.classList.toggle('show', willOpen);
      btn.setAttribute('aria-expanded', willOpen);
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.top-action')) closeTopPanels();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTopPanels();
  });

});

// ============================================
// 10. AVISO DE ALTURA AL PADRE (iframe en SharePoint)
// ============================================
(function () {
  var lastH = 0;
  function notifyParent() {
    try {
      if (window.parent === window) return;
      var h = Math.ceil(document.documentElement.scrollHeight);
      if (Math.abs(h - lastH) < 6) return;
      lastH = h;
      window.parent.postMessage({ tranes: 1, height: h }, '*');
    } catch (e) {}
  }
  window.addEventListener('load', notifyParent);
  window.addEventListener('resize', notifyParent);
  setInterval(notifyParent, 2000);
})();
