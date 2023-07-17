document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menuToggle');
    const menuContent = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      menuContent.classList.toggle('active');
  
      if (menuContent.classList.contains('active')) {
        menuContent.style.height = '0';
        menuContent.style.opacity = '0';
        menuContent.style.display = 'block';
        setTimeout(function() {
          menuContent.style.height = menuContent.scrollHeight + 'px';
          menuContent.style.opacity = '1';
        }, 10);
      } else {
        menuContent.style.height = menuContent.scrollHeight + 'px';
        menuContent.style.opacity = '1';
        setTimeout(function() {
          menuContent.style.height = '0';
          menuContent.style.opacity = '0';
          menuContent.style.display = 'none';
        }, 10);
      }
    });
  });
  