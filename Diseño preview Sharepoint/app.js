// ============================================
// TRANES S.A.S. — Intranet Corporativa
// JavaScript: Navegación, Dropdowns, Buscador
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

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = dropdown.classList.contains('open');

      // Close all other dropdowns
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

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close mobile nav when clicking a nav link
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

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (navlinks && navlinks.classList.contains('open') && !e.target.closest('.navlinks') && !e.target.closest('.mobile-toggle')) {
      navlinks.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
      document.body.style.overflow = '';
    }
  });

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
      console.log(`Conectando con SharePoint ID: ${spId}`);
    });
  });

  // ------------------------------------------
  // 5. SMOOTH SCROLL PARA ENLACES INTERNOS
  // ------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ------------------------------------------
  // 6. QUICK ITEMS — Navegación interna
  // ------------------------------------------
  document.querySelectorAll('.quick-item').forEach(item => {
    item.addEventListener('click', () => {
      const label = item.querySelector('span:last-child').textContent.trim();
      console.log(`Acceso rápido: ${label}`);
    });
  });

  // ------------------------------------------
  // 7. BARRA DE ACCESIBILIDAD
  // ------------------------------------------
  const a11yToggle = document.querySelector('.a11y-toggle');
  const a11yPanel = document.querySelector('.a11y-panel');

  if (a11yToggle && a11yPanel) {
    a11yToggle.addEventListener('click', () => {
      const isOpen = a11yPanel.classList.toggle('show');
      a11yToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close panel on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.a11y-toolbar')) {
        a11yPanel.classList.remove('show');
        a11yToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // A11y buttons
    let fontLevel = 0;
    document.querySelectorAll('.a11y-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');

        if (action === 'contrast') {
          document.body.classList.toggle('high-contrast');
        } else if (action === 'fontsize-increase') {
          fontLevel = Math.min(fontLevel + 1, 2);
          document.body.classList.remove('font-large', 'font-xlarge');
          if (fontLevel === 1) document.body.classList.add('font-large');
          if (fontLevel === 2) document.body.classList.add('font-xlarge');
        } else if (action === 'fontsize-decrease') {
          fontLevel = Math.max(fontLevel - 1, 0);
          document.body.classList.remove('font-large', 'font-xlarge');
          if (fontLevel === 1) document.body.classList.add('font-large');
        } else if (action === 'reset') {
          fontLevel = 0;
          document.body.classList.remove('high-contrast', 'font-large', 'font-xlarge');
        }
      });
    });
  }

});