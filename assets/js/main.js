/* Milestone 2: rimuovere tutto il markup statico e inserire tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript. */

// 1. Creazione un array
const images = [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp'
    ];

// 2. Seleziono l'elemento della dom dove collocare le immagini
const containerEl = document.querySelector(".container");


// 3. Loop nell'array
for (i = 0; i < images.length; i++){

    const containerElMarkup = `<img src="./assets/${images[i]}" alt="">`;

    containerEl.innerHTML += containerElMarkup;
    
    if(images[0]){
        let activeImage = document.querySelector("img");
            activeImage.classList.add("active");
    }

}



// aggiungere la classe active

