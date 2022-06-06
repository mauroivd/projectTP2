const Bar = require('../models/bar')
let { repositorioBares } = require('../repositories/bares')
// const { db } = require('../database/firebase')

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
        const bar = new Bar(id, nombre, direccion, cantidad)
        console.log(bar)
        // db.collection('bares').add(bar)

        //logica de negocio bar
        try {
            // serviceBar.verificarNombre(bar, req, res)
            repositorioBares.push(bar)

            res.status(201)
            res.json(bar)
        } catch (e) {
            res.status(409)
            res.json(bar)
        }

    },

    deleteBar: function (req, res, next) {
        const bares = repositorioBares.filter(b => req.params.id != b.id)
        // console.log(bar)
        repositorioBares = bares
        res.json(repositorioBares);
    },

    editBar: function (req, res, next) {
        try {
            if (!(req.body.id == null || req.body.id == undefined)) {
                let newBares = repositorioBares.filter(b => req.body.id != b.id)
                let barModificado = {
                    id: req.body.id,
                    nombre: req.body.nombre,
                    direccion: req.body.direccion,
                    cantidad: req.body.cantidad
                }
                newBares.push(barModificado)
                repositorioBares = newBares
                res.json(repositorioBares);
            }
        } catch (error) {
            console.error(error)
        }
    },

    getBarByIdController: function (req, res) {
        const bar = repositorioBares.find(b => req.params.id == b.id)
        res.json(bar);
    }
}