const rutas = require("./routes.js");
const yrgs = require("./config/yrgs.js");

yrgs
    .consola()
    .then((a) => {
        rutas
            .inicio(a._[0], a.Descripcion, a.Completado)
            .then(a)
            .catch(console.log);

    })
    .catch((a) => {
        console.log("No Works", a);
    });