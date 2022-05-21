const fs = require("fs");
const colors = require("colors");

listado = [];

const guardarDB = () => {
    const data = JSON.stringify(listado);
    fs.writeFile("./data/data.json", data, (err) => {
        if (err) {
            console.log("error al guardar la data JSON ", err);
        }
    });
};

const cargarDB = () => {
    try {
        console.log("en try");
        listado = require("../data/data.json");
    } catch (error) {
        console.log("error catch", error);
        listado = [];
    }
    return listado;
};

const almacenar = (tarea, estado) => {
    return new Promise((resolve, reject) => {
        cargarDB();
        let PorHacer = {
            descripcion: tarea,
            completado: estado,
        };
        listado.push(PorHacer);
        resolve(PorHacer);
        guardarDB();
    });
};

const actualizar = (busqueda, estado) => {
    return new Promise((resolve, reject) => {
        cargarDB();
        index = listado.findIndex((tarea) => {
            return tarea.descripcion === busqueda;
        });
        if (index >= 0) {
            listado[index].completado = estado;
        } else {
            reject("Tarea no encontrada: ", busqueda);
        }
        guardarDB();
        resolve(listado);
    });
};

const solicitar = () => {
    return new Promise((resolve, reject) => {
        resolve(cargarDB());
    });
};
const borrar = (eliminar) => {
    return new Promise((resolve, reject) => {
        cargarDB();
        index = listado.findIndex((tarea) => {
            return tarea.descripcion === eliminar;
        });
        if (index >= 0) {
            resolve(listado[index]);
            listado.splice(index, 2);
        }
        guardarDB();
    });
};
module.exports = {
    almacenar,
    solicitar,
    actualizar,
    borrar,
};