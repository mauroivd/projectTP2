var express = require('express');
const { getBaresController,
    getBarByIdController,
    createBarController,
    editBar,
    deleteBar
} = require('../controllers/bar');
var router = express.Router()

// Estos callbacks parten siempre de '/aviones' que está definido en el 
// módulo principal

/* GET aviones listing. */
router.get('/', getBaresController);
// GET /aviones/asdlkajsld
router.get('/:id', getBarByIdController);

router.post('/', createBarController);

router.put('/:id', editBar);

router.delete('/:id', deleteBar);

module.exports = router;
