// Agrandar imágenes de la galería
const modal = document.getElementById('imageModal');
const modalImg = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.close');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = thumbnail.getAttribute('data-full');
        modalImg.alt = thumbnail.alt;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target.classList.contains('modal-content')) {
        modal.style.display = "none";
    }
}

var indice = 0;
var pignatas = [
    'url/../img/polar.jpg',
    'url/../img/casette.jpg',
    'url/../img/comunion1.jpg',
    'url/../img/comunion2.jpg',
    'url/../img/cesta.jpg',
    'url/../img/pinata54.jpg',
    'url/../img/pinata63.jpg'
];

document.getElementById('masPignatas').addEventListener('click', function(e) {
    e.preventDefault();
    
    var contenedor = document.getElementById('contenedorPignatas');
    contenedor.innerHTML = ''; // Limpia las imágenes anteriores
    
    var imagenesPorClic = 1; // Cambia a 1 si quieres una por vez
    
    for (var i = 0; i < imagenesPorClic && indice < pignatas.length; i++) {
        var img = document.createElement('img');
        img.src = pignatas[indice];
        img.alt = 'Piñata';
        contenedor.appendChild(img);
        indice++;
    }
    
    if (indice >= pignatas.length) {
        indice = this.style.display = 'none';
         // Reinicia para volver a empezar
        // O si prefieres ocultar el botón:
        // this.style.display = 'none';
    }
});

// Pasos elaboración piñatas
document.getElementById('pinnataCar').addEventListener('click',
    function() {
        var procedimiento =
    document.getElementById('procedimiento');
        
        // FIX: Se modifica la condición para incluir la cadena vacía (""), 
        // que es el valor inicial cuando el display se establece en el CSS.
        if(procedimiento.style.display === 'none' || procedimiento.style.display === '') {
            procedimiento.style.display = 'block';
        } else {
            procedimiento.style.display = 'none';
        }
    });
// Fin visualización del procedimiento piñatas
