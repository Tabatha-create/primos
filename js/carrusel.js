/* Carrusel de fotos + visor para ampliar. Sin librerías. */
(function () {
  // ---- Flechas del carrusel ----
  document.querySelectorAll('.carrusel').forEach(function (car) {
    var pista = car.querySelector('.carrusel-pista');
    var mover = function (dir) {
      pista.scrollBy({ left: dir * Math.max(pista.clientWidth * 0.8, 200), behavior: 'smooth' });
    };
    car.querySelector('.carrusel-btn.prev').addEventListener('click', function () { mover(-1); });
    car.querySelector('.carrusel-btn.next').addEventListener('click', function () { mover(1); });
  });

  // ---- Visor (foto ampliada) ----
  var visor = document.querySelector('.visor');
  if (!visor || typeof visor.showModal !== 'function') return;

  var fotos = [];   // fotos del carrusel que se está viendo
  var img = visor.querySelector('img');
  var cap = visor.querySelector('figcaption');
  var actual = 0;

  function mostrar(i) {
    actual = (i + fotos.length) % fotos.length;
    var f = fotos[actual];
    img.src = f.getAttribute('data-grande') || f.src;   // opcional: versión grande de la foto
    img.alt = f.alt;
    var c = f.closest('.diapo').querySelector('figcaption');
    cap.textContent = c ? c.textContent : '';
  }

  document.querySelectorAll('.diapo-abrir').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var car = btn.closest('.carrusel');
      fotos = Array.prototype.slice.call(car.querySelectorAll('.diapo img'));
      mostrar(fotos.indexOf(btn.querySelector('img')));
      visor.showModal();
    });
  });

  visor.querySelector('.visor-btn.prev').addEventListener('click', function () { mostrar(actual - 1); });
  visor.querySelector('.visor-btn.next').addEventListener('click', function () { mostrar(actual + 1); });
  visor.querySelector('.visor-cerrar').addEventListener('click', function () { visor.close(); });

  // clic en el fondo oscuro = cerrar
  visor.addEventListener('click', function (e) { if (e.target === visor) visor.close(); });

  // flechas del teclado (Esc cierra solo)
  visor.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') mostrar(actual - 1);
    if (e.key === 'ArrowRight') mostrar(actual + 1);
  });
})();