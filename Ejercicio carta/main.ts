const cartas = document.querySelectorAll(".carta");
const divResultado = document.querySelector("#resultado") as HTMLDivElement;
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
  "dos de tréboles",
  "dos de diamantes",
  "dos de corazones",
  "dos de picas",
  "tres de tréboles",
  "tres de diamantes",
  "tres de corazones",
  "tres de picas",
  "cuatro de tréboles",
  "cuatro de diamantes",
  "cuatro de corazones",
  "cuatro de picas",
  "cinco de tréboles",
  "cinco de diamantes",
  "cinco de corazones",
  "cinco de picas",
  "seis de tréboles",
  "seis de diamantes",
  "seis de corazones",
  "seis de picas",
  "siete de tréboles",
  "siete de diamantes",
  "siete de corazones",
  "siete de picas",
  "ocho de tréboles",
  "ocho de diamantes",
  "ocho de corazones",
  "ocho de picas",
  "nueve de tréboles",
  "nueve de diamantes",
  "nueve de corazones",
  "nueve de picas",
  "jota de tréboles",
  "jota de diamantes",
  "jota de corazones",
  "jota de picas",
  "reina de tréboles",
  "reina de diamantes",
  "reina de corazones",
  "reina de picas",
  "rey de tréboles",
  "rey de diamantes",
  "rey de corazones",
  "rey de picas",
  "as de tréboles",
  "as de diamantes",
  "as de corazones",
  "as de picas",
];


//TODO Hay que crear una funcion en la que se introduzca el nombre de el id y el .src osea el valor de la seleccion
//TODO Que esos elementos se guarden en algun sitio y si se vuelven a pulsar que se eliminen
let resultados = ["a", "b", "c", "d"];
//Funciones

/*
* @returns {string} - Devuelve un string random de dentro de la const archivos
*/
const randomCard = (): string => {
  return archivos[Math.floor(Math.random() * archivos.length)];
};
/*
* @param {string} nombreArchivo - Nombre de el archivo en el que queremos encontrar
* @returns {string} - Devuelve el nombre de el archivo pero traducido
*/
const traducir = (nombreArchivo : string) : string => {
  //El nombre de el archivo tiene el ./img/ incluido y se tiene que quitar para que se pueda encontrar el indice
  console.log(nombreArchivo.slice(6) + " nombre del archivo trim");
    const indice = archivos.findIndex((elemento) => {
     return elemento === nombreArchivo.slice(6);      //Cuando el elemento que itera sea igual al nombre de el archivo, devuelve el indice
    })
    console.log("El indice de archivo es " + indice + " " + traducciones[indice]);
    return traducciones[indice];
}

/*
* Posteriormente se hara una comparación que dara un resultado y si coincide debajo de todo se indicara
*
* @param {string[]} resultados - Es el array de string de resultados en los que se colocan los result de las cartas cuando se seleccionan
* @returns {number} - Devuelve la posición de la primera carta que coincide
* @returns {number} - Devuelve la posición de la segunda carta que coincide
* @returns {string} - Devuelve el nombre de el archivo de la carta que ha coincidido
*/
const comparacioCartas = (resultados: string[]): [number, number, string] => {

  for (let i = 0; i < resultados.length; i++) {
    for (let j = 0; j < resultados.length; j++) {
      if (i != j && resultados[i] == resultados[j]) {
        //Si los indices no son iguales(para que no se compare a si mismo) y hay igualdad de resultados
        console.log(
          "Son iguales" +
            " carta " +
            (i + 1) +
            " - carta " +
            (j + 1) +
            ". Valor: " +
            resultados[i]
        );
        const nCarta1 = i + 1;
        const nCarta2 = j + 1;
        return [nCarta1, nCarta2, resultados[i]];
      }
    }
  }
  return [0, 0, ""];
};
let isResult = false; //Parametro que ayudara a saber si se ha imprimido un resultado o no en el div
/*
* Funcion que imprime el resultado en el objetivo asignado
*
* @param {number} - Devuelve la posición de la primera carta que coincide
* @param {number} - Devuelve la posición de la segunda carta que coincide
* @param {string} - Devuelve el nombre de el archivo de la carta que ha coincidido
* @param {HTMLDivElement} - Definimos el div en el que queremos que se imprima el resultado
*/
const imprimirResultado = (posicionA : number, posicionB : number, resultado : string, divObjetivo : HTMLDivElement) => {
  //Imprimir resultado si hay resultado
  
  if(resultado != ""){
    const resultadoTraducido = traducir(resultado);
    divObjetivo.innerHTML = `<p>Victoria! Match entre la carta ${posicionA} y la ${posicionB} de <b>${resultadoTraducido}</b> </p>`;
    isResult = true;
    console.log(`Resultado: ${resultado} y Resultado traducido: ${resultadoTraducido}`);
  }else if(resultado == ""  && isResult == true){
    //Si no devuelve resultado la funcion anterior, se deberia borrar el <p> en caso de que haya
    console.log("Eliminando el resultado de el div")
    divObjetivo.textContent = "";
    isResult = false;
  }
}

//EVENTLISTENER para cada carta de el conjunto de cartas
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
      let seleccion : string;
      if (!selectableCarta.isSelected) {
        //Si la carta no se ha seleccionado, buscaremos una random y la asignaremos a .src
        seleccion = "./img/" + randomCard();
        carta.src = seleccion;
        selectableCarta.isSelected = true;
        //Cuando se elige una carta random, colocamos su valor en el array de resultados para posteriormente comparar
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
        const res = comparacioCartas(resultados);
        imprimirResultado(...res, divResultado); //Esos 3 puntos hace que los 3 elementos de el array que saca de comparacio se introduzcan en los 3 elementos de imprimir
      } else {
        //Si la carta estaba seleccionada y se vuelve a pulsar, se pone boca abajo y el .isSelected pasa a false. 
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
        //Tambien comparamos para que se actualize el div y se elimine
        const res = comparacioCartas(resultados);
        imprimirResultado(...res, divResultado);
      }
    });
  }
});
