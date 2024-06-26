var cartas = document.querySelectorAll(".carta");
var cartaSeleccionada = false;
var archivos = [
    "2c.gif",
    "2d.gif",
    "2h.gif",
    "2s.gif",
    "3c.gif",
    "3d.gif",
    "3h.gif",
    "3s.gif",
    "4c.gif",
    "4d.gif",
    "4h.gif",
    "4s.gif",
    "5c.gif",
    "5d.gif",
    "5h.gif",
    "5s.gif",
    "6c.gif",
    "6d.gif",
    "6h.gif",
    "6s.gif",
    "7c.gif",
    "7d.gif",
    "7h.gif",
    "7s.gif",
    "8c.gif",
    "8d.gif",
    "8h.gif",
    "8s.gif",
    "9c.gif",
    "9d.gif",
    "9h.gif",
    "9s.gif",
    "10c.gif",
    "10d.gif",
    "10h.gif",
    "10s.gif",
    "jc.gif",
    "jd.gif",
    "jh.gif",
    "js.gif",
    "qc.gif",
    "qd.gif",
    "qh.gif",
    "qs.gif",
    "kc.gif",
    "kd.gif",
    "kh.gif",
    "ks.gif",
    "ac.gif",
    "ad.gif",
    "ah.gif",
    "as.gif",
];
var randomCard = function () {
    return archivos[Math.floor(Math.random() * archivos.length)];
};
cartas.forEach(function (carta) {
    //Hover en el que en cada carta se gira
    carta.addEventListener("mouseover", function (evento) {
        if (carta instanceof HTMLImageElement) {
            carta.src = "./card-front.png";
        }
        carta.addEventListener("mouseleave", function () {
            if (!cartaSeleccionada) { //Solo se mostrara la parte trasera si no hemos hecho click, osea la carta seleccionada sea false
                carta.src = "./card-back.png";
            }
        });
    });
    //Evento que se produce si se hace click
    carta.addEventListener('click', function () {
        if (carta instanceof HTMLImageElement) {
            carta.src = "./img/" + randomCard();
            cartaSeleccionada = true;
        }
        if (cartaSeleccionada) {
            cartaSeleccionada = false;
        }
    });
});
//Hay que seleccionar cada carta con un id y adivinar cual es la carta que se ha seleccionado
//Entonces remove listener y actualizarselo, ya que todas las cartas tienen el cartaseleccionada en false al principio
