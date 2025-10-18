// Botón "Scroll to Top"
const btnUp = document.getElementById('btnUp');

if (btnUp) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnUp.style.display = 'block';
    } else {
      btnUp.style.display = 'none';
    }
  });

  btnUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('subject').value;
    const mensaje = document.getElementById('message').value;
    
    console.log('Datos del formulario:', {
      nombre,
      email,
      asunto,
      mensaje
    });
    
    alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te responderemos pronto a ${email}.`);
    
    contactForm.reset();
    
    const dropdown = document.querySelector('.dropdown-form');
    if (dropdown) {
      dropdown.style.opacity = '0';
      dropdown.style.visibility = 'hidden';
      
      setTimeout(() => {
        dropdown.style.opacity = '';
        dropdown.style.visibility = '';
      }, 2000);
    }
  });
}

// Cerrar el formulario al hacer clic fuera de él
document.addEventListener('click', function(e) {
  const dropdown = document.querySelector('.contact-dropdown');
  const dropdownForm = document.querySelector('.dropdown-form');
  
  if (dropdown && dropdownForm && !dropdown.contains(e.target)) {
    dropdownForm.style.opacity = '0';
    dropdownForm.style.visibility = 'hidden';
  }
});

// Prevenir que el clic dentro del formulario lo cierre
const dropdownForm = document.querySelector('.dropdown-form');
if (dropdownForm) {
  dropdownForm.addEventListener('click', function(e) {
    e.stopPropagation();
  });
}