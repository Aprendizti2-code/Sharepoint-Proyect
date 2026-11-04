(function () {
  'use strict';

  try {
    var theme = window.localStorage.getItem('tranes-theme');
    if (theme === 'dark' || theme === 'blue') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  } catch (error) {
    // Theme preferences are optional when browser storage is unavailable.
  }
})();
