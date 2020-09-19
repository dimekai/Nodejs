const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./toDo/toDo');

let mostrarComandos = () => {
    console.log(colors.yellow('Comandos disponibles: '));
    console.log('\t > npm index.js', colors.yellow('crear'));
    console.log('\t > npm index.js', colors.yellow('listar'));
    console.log('\t > npm index.js', colors.yellow('actualizar'));
};

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // Vamos a crear la tarea
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listaTareas = toDo.getListado();

        for (let tarea of listaTareas) {
            console.log("========= ToDo ============".green);
            console.log('Descrip: ', tarea.descripcion);
            console.log('Estado:  ', (tarea.completado ? "Completado" : "Pendiente"));
            console.log("===========================".green);
        }
        break;

    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;

    default:
        console.log('Tu comando no es reconocido'.red);
        mostrarComandos();
        break;
}