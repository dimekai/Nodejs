const opt_crear = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    }
};

const opt_actualiza = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opt_crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opt_actualiza)
    .help()
    .argv;

module.exports = {
    argv
};