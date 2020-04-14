const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Ingresar la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Ingrese si la tarea fue completada'
};

const argv = require('yargs')
    .command('crear', 'Crea un nuevo elemento en todo-list', {
        descripcion
    })
    .command('actualizar', 'Actualizar un elemento dentro de todo-list', {
        descripcion,
        completado
    })
    .command('listar', 'Lista las tareas creadas en la todo-list', {
        completado
    })
    .command('borrar', 'Borra una tarea específica de la todo-list', {
        descripcion
    })
    .help()
    .argv;



module.exports = {

    argv

}