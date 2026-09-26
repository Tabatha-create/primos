// Agrandar imágenes de la galería
const modal = document.getElementById('imageModal');
const modalImg = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.close');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = thumbnail.src;
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

let indice = 0; 

const pignatas = [ 
    'img/MunNieve.jpg', 
    'img/casette.jpg', 
    'img/comunion1.jpg', 
    'img/comunion2.jpg', 
    'img/cesta.jpg', 
    'img/pinata54.jpg', 
    'img/pinata63.jpg',
    'img/pinata65.jpg',
    'img/pinata58.jpg',
    'img/pinata61.JPG',
    'img/Kitty.jpg',
    'pinata76.jpg',
];

const nombresPignatas = [ 
    'Muñeco de Nieve', 
    'Casette', 
    'Comunión-1', 
    'Comunión-2', 
    'Cesta', 
    'Mariposa', 
    'Evil Minion',
    'Batman',
    'Conejo',
    'Tortuga Ninja',
    'Hello Kitty',
    'Power Ranger'
]; 

document.getElementById('masPignatas').addEventListener('click', function(e) { 
    e.preventDefault(); 
    
    const contenedor = document.getElementById('contenedorPignatas'); 
    const imagenesPorClic = 4; 

    contenedor.innerHTML = '';
    
    for (let i = 0; i < imagenesPorClic && indice < pignatas.length; i++) {

        const card = document.createElement('div'); 
        card.classList.add('card'); 
        
        const img = document.createElement('img'); 
        img.src = pignatas[indice]; 
        img.alt = nombresPignatas[indice]; 
        img.classList.add('thumbnail'); 
        
        const nombre = document.createElement('p'); 
        nombre.textContent = nombresPignatas[indice]; 
        
        card.appendChild(img); 
        card.appendChild(nombre); 
        
        contenedor.appendChild(card); 
        
        // Abrir la imagen en el mismo modal 
        img.addEventListener('click', () => { 
            modal.style.display = "block"; 
            modalImg.src = img.src; 
            modalImg.alt = img.alt; 
        }); 
        
        indice++; 
    } 

    // Ocultar el botón cuando no queden más imágenes 
    if (indice >= pignatas.length) { 
        this.style.display = 'none'; 
    } 
});