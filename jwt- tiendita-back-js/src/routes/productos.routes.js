const { Router } = require('express')
const router = Router()

const valida = require('../controllers/verificarToken')
const productosController = require('../controllers/productos.controller.js')

router.get('/', productosController.getProductos)
router.get('/:id', productosController.getProducto)
router.post('/', valida.verificarToken, productosController.createProducto)
router.put('/:id', valida.verificarToken, productosController.updateProducto)
router.delete('/:id', valida.verificarToken, productosController.deleteProducto)

module.exports = router