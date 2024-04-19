"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const valida = require('../controllers/verificarToken');
const producto_controller_1 = require("../controllers/producto.controller");
const multer_1 = __importDefault(require("../libs/multer"));
router.post('/', valida.verificarToken, multer_1.default.single('image'), producto_controller_1.createProducto);
router.get('/', producto_controller_1.getProductos);
router.get('/:id', producto_controller_1.getProducto);
router.get('/:id', valida.verificarToken, producto_controller_1.deleteProducto);
router.get('/:id', valida.verificarToken, producto_controller_1.updateProducto);
exports.default = router;
