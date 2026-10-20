/**
 * ==========================================================================
 * PORTAFOLIO PROFESIONAL — MARÍA JOSÉ ZAPATA TABORDA
 * Estudiante de Ingeniería Informática | Unilasallista
 * Lógica de interacción en JavaScript Vanilla
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. AÑO DINÁMICO PARA EL PIE DE PÁGINA
  // ------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear().toString();
  }

  // ------------------------------------------------------------------------
  // 2. GESTIÓN ACCESIBLE DEL MENÚ DE NAVEGACIÓN MÓVIL
  // ------------------------------------------------------------------------
  const navbarCollapse = document.getElementById('navbarNav');
  const navbarToggler = document.querySelector('.navbar-toggler-custom');
  const navLinks = document.querySelectorAll('.nav-link-custom, .navbar-brand-custom');

  if (navbarCollapse && navbarToggler) {
    // Cerrar el menú automáticamente al hacer clic en cualquier enlace de sección en móviles
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          // Utilizar la API oficial de Bootstrap Collapse si está disponible
          if (window.bootstrap && window.bootstrap.Collapse) {
            const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse) || new window.bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          } else {
            navbarCollapse.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });

    // Cerrar el menú con la tecla 'Escape' para accesibilidad de teclado
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navbarCollapse.classList.contains('show')) {
        if (window.bootstrap && window.bootstrap.Collapse) {
          const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse) || new window.bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove('show');
          navbarToggler.setAttribute('aria-expanded', 'false');
        }
        navbarToggler.focus();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3. RESALTADO ACTIVO DE ENLACES SEGÚN LA SECCIÓN VISIBLE (SCROLLSPY)
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const mainNavLinks = document.querySelectorAll('.navbar-nav .nav-link-custom');

  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const navHeight = 90;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - navHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        mainNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink(); // Ejecución inicial

  // ------------------------------------------------------------------------
  // 4. FUNCIÓN COPIAR CORREO CON FEEDBACK ACCESIBLE
  // ------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyNotification = document.getElementById('copy-notification');
  const emailToCopy = 'mzapata0@unilasallista.edu.co';

  if (copyEmailBtn && copyNotification) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback para entornos con permisos restringidos de portapapeles
          const tempInput = document.createElement('textarea');
          tempInput.value = emailToCopy;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        // Mostrar notificación de confirmación
        copyNotification.style.display = 'inline-flex';
        copyEmailBtn.setAttribute('aria-live', 'polite');

        setTimeout(() => {
          copyNotification.style.display = 'none';
        }, 3000);
      } catch (err) {
        console.warn('No se pudo copiar automáticamente al portapapeles:', err);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5. BOTÓN FLOTANTE "VOLVER ARRIBA"
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }
});
