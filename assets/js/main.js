/* Milestone 2: rimuovere tutto il markup statico e inserire tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript. */

// 1. Creazione un array con i path delle immagini
const images = [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp'
    ];

// 2. stampo in console tutti path, singolarmente
const containerEl = document.querySelector(".container");

for (i = 0; i < images.length; i++){
    containerEl.innerHTML = document.createElement = `${images}`;
}

    