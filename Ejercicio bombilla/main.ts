const levelIndicator = document.getElementById("levelIndicator") as HTMLSpanElement;
const lightLevel = document.getElementById("ligthLevel") as HTMLInputElement;
const interruptor = document.getElementById("interruptor") as HTMLImageElement;
let encendido = false;  //Elemento que empezara en apagado y se modificara al encenderla
const bombilla = document.getElementById("bombilla") as HTMLImageElement;
const zoomIndicator = document.getElementById("zoomIndicator") as HTMLSpanElement;
const zoomLevel = document.getElementById("zoomLevel") as HTMLInputElement;


//Input de rango de el control de luminosidad
lightLevel.addEventListener('input', () => {
    levelIndicator.textContent = lightLevel.value;  //Actualiza el numero de el indicador si se modifica el rango
    //TODO Implementar cambio en luminosidad en función de el rango
    const valor = +lightLevel.value;
    if(!encendido){
        interruptor.src = './bon.jpg';
        bombilla.src = './on.jpg';
        encendido = true;
    }
    bombilla.style.opacity = '' + valor / 7;
    if(valor == 0){
        interruptor.src = './boff.jpg';
        bombilla.src = './off.jpg';
        encendido = false;
        bombilla.style.opacity = '' + 100;
    }
})

//Boton de apagado y encendido
interruptor.addEventListener('click', () => {
    //console.log(interruptor.src); //Tiene una ruta absoluta, por lo tanto si hacemos la comparación a ./x no funciona
    if(!encendido){
        //Actualizamos las imagenes de el interruptor y la bombilla
        interruptor.src = './bon.jpg';
        bombilla.src = './on.jpg';
        //Tambien ajustamos el indicador de el brillo y el rangeInput 
        lightLevel.value  = "7";
        levelIndicator.textContent = lightLevel.value;
        encendido = true;
        console.log("Encender");
    }else if(encendido){
        interruptor.src = './boff.jpg';
        bombilla.src = './off.jpg';
        lightLevel.value  = "0";
        levelIndicator.textContent = lightLevel.value;
        encendido = false;
        console.log("Apagar");
    }
})

//Input de el rango de zoom
zoomLevel.addEventListener('input', () => {
    zoomIndicator.textContent = zoomLevel.value;
    const valor = +zoomLevel.value;
    bombilla.style.width = (300 + valor/5*100) + "px";
})