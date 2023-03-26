// Función de ejemplo para mostrar una alerta al hacer clic en un enlace
function exampleFunction() {
  alert('¡Hola! Esta es una función de ejemplo en JavaScript.');
}

// Agregar un detector de eventos a los enlaces
document.addEventListener('DOMContentLoaded', function () {
  // Obtener todos los enlaces del documento
  const links = document.querySelectorAll('nav a');

  // Agregar un detector de eventos de clic a cada enlace
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Evitar que el enlace siga su comportamiento predeterminado
      exampleFunction(); // Llamar a la función de ejemplo
    });
  });
});
