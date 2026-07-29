 // ==============================
// FANTASÍAS MARIFE — FILIGRANAS
// Script del modal de imágenes
// ==============================

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

// Seleccionamos elementos del DOM
const modal = document.getElementById('imageModal');
const modalImg = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.close');
const thumbnails = document.querySelectorAll('.thumbnail');

// Mostrar imagen ampliada al hacer clic
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = thumbnail.src;
    modalImg.alt = thumbnail.alt;
  });
});

// Cerrar modal al hacer clic en la X
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = (event) => {
  if (event.target.classList.contains('modal-content')) {
    modal.style.display = "none";
  }
};

// ==============================
// Botones "Descubrir más"
// ==============================

const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

botonesVerMas.forEach(boton => {
    boton.addEventListener('click', () => {
        const categoria = boton.closest('.categoria');
        const galeriaOculta = categoria.querySelector('.gallery-oculta');
        galeriaOculta.classList.toggle('visible');
        if (galeriaOculta.classList.contains('visible')) {
            boton.textContent = "✨ Ver menos";
        } else {
            const titulo = categoria.querySelector('h3').textContent;
            boton.textContent = `✨ Descubrir más ${titulo.replace(/^[^\w]+/, '').toLowerCase()}`;
        }
    });
});
