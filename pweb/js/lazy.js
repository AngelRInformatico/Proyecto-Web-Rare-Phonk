document.addEventListener("DOMContentLoaded", function() {
  var lazyElements = document.querySelectorAll(".Lazy_Section");
  var lazyLoad = function() {
      lazyElements.forEach(function(lazyElement) {
          if (lazyElement.getBoundingClientRect().top < window.innerHeight && lazyElement.getAttribute("data-loaded") !== "true") {
              // Mostrar la sección con opacidad completa
              lazyElement.style.opacity = 1;
              // Marcar la sección como cargada para evitar cargarla nuevamente
              lazyElement.setAttribute("data-loaded", "true");
          }
      });
  };

  // Cargar las secciones perezosamente al desplazarse o al cargar la página
  window.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  lazyLoad(); // Cargar las secciones al cargar la página inicialmente
});
