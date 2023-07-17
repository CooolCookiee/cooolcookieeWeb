// Obtener todas las tarjetas de video
const cards = document.querySelectorAll('.cardVideo');

// Recorrer cada tarjeta
cards.forEach((card) => {
  // Obtener elementos internos de la tarjeta
  const img = card.querySelector('img');
  const title = card.querySelector('h2');
  const description = card.querySelector('p');
  const link = card.querySelector('a');

  // Agregar evento de mouseover a la tarjeta
  card.addEventListener('mouseover', () => {
    // Mostrar los elementos internos de la tarjeta
    img.style.filter = 'brightness(50%) blur(2px)';
    title.style.opacity = '1';
    description.style.opacity = '1';
    link.style.opacity = '1';
  });

  // Agregar evento de mouseout a la tarjeta
  card.addEventListener('mouseout', () => {
    // Ocultar los elementos internos de la tarjeta
    img.style.filter = 'brightness(100%) blur(0)';
    title.style.opacity = '0';
    description.style.opacity = '0';
    link.style.opacity = '0';
  });
});
