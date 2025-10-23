 function expandirTexto(elemento) {
    const contenedor = elemento.closest('.texto-expandible');
    const resumen = contenedor.querySelector('.texto-resumen');
    resumen.classList.add('oculto');
    const completo = contenedor.querySelector('.texto-completo');
    completo.classList.remove('oculto');
}

function contraerTexto(elemento) {
    const contenedor = elemento.closest('.texto-expandible');
    const resumen = contenedor.querySelector('.texto-resumen');
    resumen.classList.remove('oculto');
    const completo = contenedor.querySelector('.texto-completo');
    completo.classList.add('oculto');
}

// Mostrar/ocultar formulario
document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.querySelector('.formulario');
    var botonMostrar = document.createElement('button');
    
    botonMostrar.textContent = 'Mostrar Formulario de Contacto';
    botonMostrar.id = 'toggleFormulario';
    botonMostrar.style.cursor = 'pointer';
    
    formulario.style.display = 'none';
    formulario.parentNode.insertBefore(botonMostrar, formulario);
    
    botonMostrar.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (formulario.style.display === 'none') {
            formulario.style.display = 'block';
            botonMostrar.textContent = 'Ocultar Formulario';
        } else {
            formulario.style.display = 'none';
            botonMostrar.textContent = 'Mostrar Formulario de Contacto';
        }
    });
});

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