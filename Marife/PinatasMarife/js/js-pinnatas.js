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

document.getElementById('masPignatas').addEventListener('click', function() {
    var pignatas = [
        'ruta/a/tu/carpeta/imagen1.jpg',
        'ruta/a/tu/carpeta/imagen2.jpg',
        'ruta/a/tu/carpeta/imagen3.jpg'
    ];
    var contenedor = document.getElementById('contenedorPignatas');
    pignatas.forEach(function(src) {
        var img = document.createElement('img');
        img.src = 'url/../img/polar.jpg';
        img.alt = 'Polar';
        contenedor.appendChild(img);
    });
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
