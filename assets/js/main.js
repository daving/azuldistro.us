(function () {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const nav = document.querySelector('.navbar');
  const toggleScrolledClass = () => {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add('navbar-scrolled');
    } else {
      nav.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', toggleScrolledClass, { passive: true });
  toggleScrolledClass();
})();
