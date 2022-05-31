const Bar = require('../models/bar')
const { repositorioBares } = require('../repositories/bares')

const getAllBares = function (req, res, next) {
    let bares = repositorioBares

    res.json(bares);
}

//Todas las rutas de bares

module.exports = {
    getBaresController: getAllBares,

    getBarController: function (req, res, next) {
        let bares = repositorioBares
        const bar = bares.find(b => req.params.id == b.id)

        if (bar === null || bar === undefined) {
            res.status(404)
            res.json({ message: "Bar no encontrado" })
        } else {
            res.status(200)
            res.json(bar);
        }
    },

    createBarController: (req, res) => {
        // estos son datos para creación de un objeto
        const { id, nombre, direccion, cantidad } = req.body
        // minima validación de datos

        // un proceso de creación del objeto avión
        // const avion = { patente, nivel }
        const bar = new Bar(id, nombre, direccion, cantidad)

        try {
            //logica de negocio bar
            repositorioBares.push(bar)

            res.status(201)
            res.json(bar)
        } catch (e) {
            res.status(409)
            res.json(bar)
        }
    }
}