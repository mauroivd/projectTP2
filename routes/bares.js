var express = require('express');
const { getBaresController, getBarByIdController, createBarController, deleteBar, editBar } = require('../controller/bar');
var router = express.Router()

router.get('/', getBaresController); //trae todos

router.get('/:id', getBarByIdController); // trae por id

router.post('/', createBarController); // crea

router.put('/', editBar); // edita

router.delete('/:id', deleteBar); // borra

module.exports = router;
