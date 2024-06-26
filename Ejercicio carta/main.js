var cartas = document.querySelectorAll('.carta');
cartas.forEach(function (carta) {
    carta.addEventListener('mouseover', function (evento) {
        if (carta instanceof HTMLImageElement) {
            carta.src = './card-front.png';
        }
        carta.addEventListener('mouseleave', function () {
            carta.src = './card-back.png';
        });
    });
});
