    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(carta => {
        carta.addEventListener('mouseover', (evento) => {
            if (carta instanceof HTMLImageElement){
                carta.src = './card-front.png';
            }
            
            carta.addEventListener('mouseleave', () => {
                (carta as HTMLImageElement).src = './card-back.png';
            });

        })
    });