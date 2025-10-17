// Botón "Scroll to Top"
const btnUp = document.getElementById('btnUp');

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

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío por defecto
    
    // Obtener valores del formulario
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('subject').value;
    const mensaje = document.getElementById('message').value;
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando EmailJS, FormSubmit, o tu propio backend
    
    // Simulación de envío exitoso
    console.log('Datos del formulario:', {
      nombre,
      email,
      asunto,
      mensaje
    });
    
    // Mostrar mensaje de confirmación
    alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te responderemos pronto a ${email}.`);
    
    // Limpiar el formulario
    contactForm.reset();
    
    // Opcional: Cerrar el dropdown después de enviar
    const dropdown = document.querySelector('.dropdown-form');
    if (dropdown) {
      dropdown.style.opacity = '0';
      dropdown.style.visibility = 'hidden';
      
      // Restaurar el dropdown después de un tiempo
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