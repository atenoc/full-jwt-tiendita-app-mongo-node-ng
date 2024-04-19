"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Producto_1 = __importDefault(require("../models/Producto"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function getProductos(req, res) {
    //console.log("Obteniendo todas las fotos...")
    const producto = await Producto_1.default.find();
    return res.json(producto);
}
exports.getProductos = getProductos;
async function getProducto(req, res) {
    //console.log("Obteniendo 1 foto con id: "+req.params.id)
    const producto = await Producto_1.default.findById(req.params.id);
    return res.json(producto);
}
exports.getProducto = getProducto;
async function createProducto(req, res) {
    //console.log("Guardando foto...")
    const { nombre, descripcion, precio } = req.body;
    const newProducto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagenPath: req.file.path
    };
    const producto = new Producto_1.default(newProducto); //crea un nuevo documento para mongo DB
    await producto.save();
    return res.json({
        message: 'Producto guardado',
        producto
    });
}
exports.createProducto = createProducto;
async function deleteProducto(req, res) {
    const { id } = req.params;
    //console.log("Obteniendo 1 foto con id: "+ id)
    const producto = await Producto_1.default.findByIdAndRemove(id);
    if (producto) {
        await fs_extra_1.default.unlink(path_1.default.resolve(producto.imagenPath), function (response) {
            console.log("Error al eliminar Producto");
        });
    }
    return res.json({
        message: 'Producto eliminado',
        producto
    });
}
exports.deleteProducto = deleteProducto;
async function updateProducto(req, res) {
    const { id } = req.params;
    const { titulo, descripcion, precio } = req.body;
    const producto = await Producto_1.default.findByIdAndUpdate(id, {
        titulo, descripcion, precio
    }, { new: true });
    return res.json({
        message: 'Producto actualizado',
        producto
    });
}
exports.updateProducto = updateProducto;
