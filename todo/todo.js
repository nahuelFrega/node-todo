const fs = require('fs');

let todoList = [];

// Crea una nueva tarea en la todo-list
const crear = (descripcion) => {

    cargarDB();

    let todo = {
        descripcion,
        completado: false
    };

    todoList.push(todo);

    return todoList;

}

// Guarda la nueva tarea en un archivo .json
const guardarDb = () => {

    return new Promise((resolve, reject) => {

        let data = JSON.stringify(todoList);

        fs.writeFile('db/data.json', data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`Se actualizó la todo-list correctamente!`);

        });

    });

}

const cargarDB = () => {

    try {

        todoList = require('../db/data.json');

    } catch (error) {

        todoList = [];

    }


}

// Obtiene el listado de las tareas creadas en la todo-list
const getListado = (completado) => {

    cargarDB();

    let resultado = todoList.filter(tarea => tarea.completado == completado);

    return resultado;

}

// Actualiza el estado de una tarea del todo-list
const update = (descripcion, completado = true) => {

    cargarDB();

    let index = todoList.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        todoList[index].completado = completado;
        guardarDb()
        return true;

    } else {

        return index;

    }

}

// Borra una tarea especifica dentro del todo-list
const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = todoList.filter(tarea => tarea.descripcion !== descripcion);

    if (todoList.length === nuevoListado.length) {

        return false;

    } else {

        todoList = nuevoListado;
        guardarDb();
        return true;

    }

}

// Exports
module.exports = {
    crear,
    guardarDb,
    getListado,
    update,
    borrar
}