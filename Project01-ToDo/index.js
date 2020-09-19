const argv = require('yargs').argv;
const colors = require('colors');

let mostrarComandos = () => {
    console.log(colors.yellow('Comandos disponibles: '));
    console.log('\t > npm index.js', colors.yellow('crear'));
    console.log('\t > npm index.js', colors.yellow('listar'));
    console.log('\t > npm index.js', colors.yellow('actualizar'));
};

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear toDo');
        break;

    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        break;

    case 'actualizar':
        console.log('Actualiza una tardea por hacer');
        break;

    default:
        console.log('Tu comando no es reconocido'.red);
        mostrarComandos();
        break;
}
console.log(argv);