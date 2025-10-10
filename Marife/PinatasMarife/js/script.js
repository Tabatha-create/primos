
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
