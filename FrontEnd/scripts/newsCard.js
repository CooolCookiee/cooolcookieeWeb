// Obtener el contenedor de las tarjetas
const cardsNewsWrapper = document.getElementById('cardsNewsWrapper');

// Agregar evento de scroll horizontal al contenedor
cardsNewsWrapper.addEventListener('wheel', (event) => {
  event.preventDefault();
  cardsNewsWrapper.scrollLeft += event.deltaY;
});
