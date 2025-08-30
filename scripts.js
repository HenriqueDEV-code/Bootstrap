// ===== Scrollspy Bootstrap =====
document.addEventListener('DOMContentLoaded', function () {
  // Ativa o Scrollspy no body (Bootstrap 5)
  if (document.body.hasAttribute('data-bs-spy')) {
    bootstrap.ScrollSpy.getOrCreateInstance(document.body, {
      target: document.body.getAttribute('data-bs-target'),
      offset: parseInt(document.body.getAttribute('data-bs-offset')) || 80
    });
  }

  // ===== Botão "Voltar ao topo" =====
  const voltarTopo = document.getElementById('voltarTopo');
  if (voltarTopo) {
    function toggleVoltarTopo() {
      if (window.scrollY > 200) {
        voltarTopo.classList.remove('visually-hidden-focusable');
        voltarTopo.classList.remove('d-none');
      } else {
        voltarTopo.classList.add('visually-hidden-focusable');
        voltarTopo.classList.add('d-none');
      }
    }
    // Inicialmente esconde
    voltarTopo.classList.add('d-none');
    window.addEventListener('scroll', toggleVoltarTopo);
    // Acessibilidade: foco visível
    voltarTopo.addEventListener('focus', function () {
      voltarTopo.classList.remove('visually-hidden-focusable');
      voltarTopo.classList.remove('d-none');
    });
    voltarTopo.addEventListener('blur', function () {
      if (window.scrollY <= 200) {
        voltarTopo.classList.add('visually-hidden-focusable');
        voltarTopo.classList.add('d-none');
      }
    });
  }

  // ===== Footer "Voltar ao topo" =====
  const footerTopo = document.getElementById('footerTopo');
  if (footerTopo) {
    footerTopo.addEventListener('click', function (e) {
      e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== Alternância de Tema (Light/Dark) =====
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const THEME_KEY = 'bs5guia-theme';

  function setTheme(theme) {
    html.setAttribute('data-bs-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    // Ícone do botão
    if (themeToggle) {
      const icon = themeToggle.querySelector('.bi');
      if (icon) {
        icon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
      }
    }
  }

  // Detecta tema salvo ou preferência do sistema
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (themeToggle) {
    // Inicializa tema
    setTheme(getPreferredTheme());
    themeToggle.addEventListener('click', function () {
      const current = html.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ===== Inicialização de Tooltips e Popovers (caso existam) =====
  if (window.bootstrap) {
    // Tooltips
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
      new bootstrap.Tooltip(el);
    });
    // Popovers
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (el) {
      new bootstrap.Popover(el);
    });
  }
});
