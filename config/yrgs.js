const { describe } = require("yargs");
const yargs = require("yargs");

const consola = (comandos) => {
    return new Promise((resolve, reject) => {
        yargs
            .command({
                command: "Crear",
                describe: "Escoge la opcion a realizar Crear/Listar/Actualizar ",
                builder: {
                    Descripcion: {
                        demand: true,
                        describe: "Descripcion de la tarea ",
                        type: "string",
                        alias: "D"
                    },
                    Completado: {
                        describe: "Tarea Completada o Pendiente?",
                        alias: "C",
                        type: "boolean",
                        default: false,
                    },
                },
                handler: (argv) => {
                    resolve(argv);
                },
            })
            .command({
                command: "Actualizar",
                describe: "Escoge la opcion a realizar Crear/Listar/Actualizar ",
                builder: {
                    Descripcion: {
                        demand: true,
                        describe: "Descripcion de la tarea Actualizada",
                        alias: "D",
                        type: "string",
                    },
                    Completado: {
                        describe: "Tarea Completada o Pendiente?",
                        default: true,
                    },
                },
                handler: (argv) => {
                    resolve(argv);
                },
            })
            .command({
                command: "Listar",
                describe: "Todas tus Tareas",
                handler: (argv) => {
                    resolve(argv);
                },
            })
            .command({
                command: "Borrar",
                describe: "Nombre de Tarea a Eliminar",
                builder: {
                    Descripcion: {
                        demand: true,
                        describe: "Descripcion de la tarea a Eliminar",
                        alias: "D",
                        type: "string",
                    }
                },
                handler: (argv) => {
                    resolve(argv);
                },
            });

        yargs.help();
        yargs.parse();
    });
};
module.exports = {
    consola,
};