import { Router }  from 'express';

const router = Router();
const valida = require('../controllers/verificarToken')

import { getProductos, getProducto, createProducto, deleteProducto, updateProducto } from '../controllers/producto.controller'
import multer from '../libs/multer'

router.post('/', valida.verificarToken, multer.single('image'), createProducto)
router.get('/',  getProductos)
router.get('/:id', getProducto)
router.get('/:id', valida.verificarToken, deleteProducto)
router.get('/:id', valida.verificarToken, updateProducto)

export default router;