const fs = require('fs');
const colors = require('colors');

// Vamos a guardarlo en un arreglo
let listToDo = [];

const guardarDB = () => {

    // Convertimos nuestra lista de tareas en un JSON 
    let data = JSON.stringify(listToDo);

    // Guardamos nuestros datos de forma 
    // persistente en el archivo data.json 
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se ha podido grabajar', err);
    });
}

const cargarDB = () => {

    // Manejar el error cuando el JSON no tiene nada dentro
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

/**
 * @param {string} desc 
 * @returns {string} tarea
 * @description Se crea una tarea y se almacena en la lista de tareas
 */
const crear = (desc) => {

    cargarDB();

    // Creamos una variable donde se guarde la tarea
    let tarea = {
        descripcion: desc,
        completado: false
    };

    // Lo agregamos a la lista de tareas
    listToDo.push(tarea);

    // Guardamos en el archivo JSON
    guardarDB();

    return tarea;
}



module.exports = { crear };