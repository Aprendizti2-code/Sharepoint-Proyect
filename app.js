// MANEJO DE BUSCADOR EN TIEMPO REAL DEL CENTRO DE FORMATOS
document.addEventListener('DOMContentLoaded', () => {
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

  // EVENTOS DE BOTONES CON DATA-SHAREPOINT-ID
  document.querySelectorAll('.fmt-btn-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const spId = btn.getAttribute('data-sharepoint-id');
      console.log(`Conectando con SharePoint ID: ${spId}`);
    });
  });
});
