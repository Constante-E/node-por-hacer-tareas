const listado = require("./data/data.js");
const colors = require("colors");

const inicio = (orden, tarea, estado) => {
    return new Promise((resolve, reject) => {
        switch (orden) {
            case "Crear":
                listado.almacenar(tarea, estado).then((a) => {
                    console.log(a, "Guardado en almacen");
                });
                break;
            case "Listar":
                listado.solicitar().then((a) => {
                    console.log("================Pendientes================".green);
                    for (let tarea of a) {
                        console.log(tarea);
                    }
                    console.log("==========================================".green);
                });
                break;
            case "Actualizar":
                listado.actualizar(tarea, estado).then((a) => {
                    console.log("tus tareas Actualizadas son: ", a);
                }).catch(console.log);
                break;
            case "Borrar":
                listado.borrar(tarea).then((a) => {
                    console.log("tu tarea eliminada es: ", a);
                }).catch(console.log);
                break;

            default:
                reject("Comando Invalido");
                break;
        }
        resolve();
    });
};

module.exports = {
    inicio,
};