const cartas = document.querySelectorAll(".carta");
let cartaSeleccionada = false;

const archivos = [
  "2c.gif", "2d.gif", "2h.gif", "2s.gif",
  "3c.gif", "3d.gif", "3h.gif", "3s.gif",
  "4c.gif", "4d.gif", "4h.gif", "4s.gif",
  "5c.gif", "5d.gif", "5h.gif", "5s.gif",
  "6c.gif", "6d.gif", "6h.gif", "6s.gif",
  "7c.gif", "7d.gif", "7h.gif", "7s.gif",
  "8c.gif", "8d.gif", "8h.gif", "8s.gif",
  "9c.gif", "9d.gif", "9h.gif", "9s.gif",
  "jc.gif", "jd.gif", "jh.gif", "js.gif",
  "qc.gif", "qd.gif", "qh.gif", "qs.gif",
  "kc.gif", "kd.gif", "kh.gif", "ks.gif",
  "ac.gif", "ad.gif", "ah.gif", "as.gif"
];

const randomCard = (): string => {
  return archivos[Math.floor(Math.random() * archivos.length)];
};

cartas.forEach((carta) => {
  if (carta instanceof HTMLImageElement) {
    // Hover en el que en cada carta se gira
    carta.addEventListener("mouseover", (evento) => {
      if (!cartaSeleccionada) {
        carta.src = "./card-front.png";
      }
      
    });

    carta.addEventListener("mouseleave", () => {
      if (!cartaSeleccionada) {   // Solo se mostrara la parte trasera si no hemos hecho click, o sea la carta seleccionada sea false
        carta.src = "./card-back.png";
        console.log("El valor cuando hace hover out: " + cartaSeleccionada);
      }
    });

    // Evento que se produce si se hace click
    carta.addEventListener("click", () => {
      if (!cartaSeleccionada) {
        const seleccion = "./img/" + randomCard();
        carta.src = seleccion;

        cartaSeleccionada = true;
      } else {
        carta.src = "./card-back.png";
        cartaSeleccionada = false;
      }
      console.log("El valor de cartaSeleccionada después del click: " + cartaSeleccionada);
    });
  }
});
