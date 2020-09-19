const fs = require('fs');
const colors = require('colors');

// Vamos a guardarlo en un arreglo
let listToDo = [];

/**
 * @param {} 
 * @returns {}
 * @description Guarda de forma persistente la lista de tareas dentro de un archivo JSON
 */
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

/**
 * @param {}
 * @returns {}
 * @description Obtiene la lista de tareas a partir del archivo JSON
 * @throws Si el archivo JSON no contiene nada, inicializa vacia la lista de tareas
 */
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


/**
 * @param {}
 * @returns {list} listToDo
 * @description Devuelve la lista de tareas que se cargó de la BD
 */
let getListado = () => {
    cargarDB();

    return listToDo;
}

module.exports = { crear, getListado };