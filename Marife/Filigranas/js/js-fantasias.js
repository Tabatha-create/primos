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
// SECCIÓN "EL ARTE DETRÁS DEL PAPEL"
// (Espacio para futuras funciones)
// ==============================
// Si más adelante quieres agregar interacciones,
// como mostrar videos del proceso o animaciones,
// puedes hacerlo aquí.
