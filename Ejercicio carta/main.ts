const cartas = document.querySelectorAll(".carta");

// Definimos una interfaz que extienda HTMLImageElement para incluir isSelected como atributo
interface SelectableImageElement extends HTMLImageElement {
  isSelected: boolean;
}
const archivos = [
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
const traducciones = [
  "dos de tréboles", "dos de diamantes", "dos de corazones", "dos de picas",
  "tres de tréboles", "tres de diamantes", "tres de corazones", "tres de picas",
  "cuatro de tréboles", "cuatro de diamantes", "cuatro de corazones", "cuatro de picas",
  "cinco de tréboles", "cinco de diamantes", "cinco de corazones", "cinco de picas",
  "seis de tréboles", "seis de diamantes", "seis de corazones", "seis de picas",
  "siete de tréboles", "siete de diamantes", "siete de corazones", "siete de picas",
  "ocho de tréboles", "ocho de diamantes", "ocho de corazones", "ocho de picas",
  "nueve de tréboles", "nueve de diamantes", "nueve de corazones", "nueve de picas",
  "jota de tréboles", "jota de diamantes", "jota de corazones", "jota de picas",
  "reina de tréboles", "reina de diamantes", "reina de corazones", "reina de picas",
  "rey de tréboles", "rey de diamantes", "rey de corazones", "rey de picas",
  "as de tréboles", "as de diamantes", "as de corazones", "as de picas"
];

const randomCard = (): string => {
  return archivos[Math.floor(Math.random() * archivos.length)];
};

//TODO Hay que crear una funcion en la que se introduzca el nombre de el id y el .src osea el valor de la seleccion
//TODO Que esos elementos se guarden en algun sitio y si se vuelven a pulsar que se eliminen
let resultados = ["a", "b", "c", "d"];
//Posteriormente se hara una comparación que dara un resultado y si coincide debajo de todo se indicara
const comparacioCartas = (resultados: string[]) : [number, number, string] => {
  let valorEncontrado = false;
  for (let i = 0; i < resultados.length; i++) {
    if(!valorEncontrado){
      for (let j = 0; j < resultados.length; j++) {
      if (i != j && resultados[i] == resultados[j]) {
        //Si los indices no son iguales(para que no se compare a si mismo) y hay igualdad de resultados
        console.log("Son iguales" + " carta " + (i+1) + " - carta " + (j+1) + ". Valor: " + resultados[i]);
        valorEncontrado = true; //Para detener el bucle y no haya repeticion, cuando se encuentre pasamos true y el for solo se ejecuta entonces
        const nCarta1 = i+1;
        const nCarta2 = j+1;
        return [nCarta1, nCarta2, resultados[i]];
      }
    }

    }
  }
  return [0, 0, ""];
};

cartas.forEach((carta) => {
  if (carta instanceof HTMLImageElement) {
    //Inicialmente indicamos que la carta no esta seleccionada
    const selectableCarta = carta as SelectableImageElement; //Aplicamos la interfaz para que disponga de isSelected
    selectableCarta.isSelected = false; //Decimos que inicialmente es false

    // Hover en el que en cada carta se gira
    carta.addEventListener("mouseover", (evento) => {
      if (!selectableCarta.isSelected) {
        carta.src = "./card-front.png";
      }
    });

    carta.addEventListener("mouseleave", () => {
      //Solo se mostrara la parte trasera si no hemos hecho click, o sea la carta seleccionada sea false
      if (!selectableCarta.isSelected) {
        carta.src = "./card-back.png";
      }
    });

    // Evento que se produce si se hace click
    carta.addEventListener("click", () => {
      let seleccion;
      if (!selectableCarta.isSelected) {
        seleccion = "./img/" + randomCard();
        carta.src = seleccion;
        selectableCarta.isSelected = true;
        //Ponemos la logica para guardar el resultado de las cartas
        if (carta.id == "carta1") {
          resultados[0] = seleccion;
        } else if (carta.id == "carta2") {
          resultados[1] = seleccion;
        } else if (carta.id == "carta3") {
          resultados[2] = seleccion;
        } else if (carta.id == "carta4") {
          resultados[3] = seleccion;
        }
        console.log(
          "Se ha seleccionado la carta " + carta.id + " con valor: " + seleccion
        );
        console.log(resultados);
        //TODO Implementacion de la funcion comparativa
        comparacioCartas(resultados);
      } else {
        carta.src = "./card-back.png";
        selectableCarta.isSelected = false;

        //Hacemos que si se deseleccionan se quiten los elementos de el array resultado
        if (carta.id == "carta1") {
          resultados[0] = "a";
        } else if (carta.id == "carta2") {
          resultados[1] = "b";
        } else if (carta.id == "carta3") {
          resultados[2] = "c";
        } else if (carta.id == "carta4") {
          resultados[3] = "d";
        }
        console.log(resultados);
      }
    });
  }
});
