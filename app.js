const { argv } = require('./config/yargs');
const { crear, guardarDb, getListado, update, borrar } = require('./todo/todo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        crear(argv.descripcion)
        guardarDb()
            .then(resultado => console.log(resultado))
            .catch(err => console.log(err))
        break;

    case 'listar':
        let listado = getListado(argv.completado);
        console.log('========todo-list========'.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log(`Estado: ${ tarea.completado }`);
            console.log('------'.blue);
        }
        console.log('========================='.green);
        break;

    case 'actualizar':
        let actualizado = update(argv.descripcion, argv.completado);
        console.log('Actualizado: ', actualizado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log('Borrado: ', borrado);
        break;

    default:
        console.log('Comando incorrecto');

}