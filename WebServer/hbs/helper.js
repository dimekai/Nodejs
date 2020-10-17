const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    let words = text.split(' ');

    words.forEach((word, idx) => {
        // Actualizamos la posición de las palabras
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Juntar todas las palabras 
    return words.join(' ');
});