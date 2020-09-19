const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}

let completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Borra un elemento de la lista de tareas', {
        descripcion: descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};