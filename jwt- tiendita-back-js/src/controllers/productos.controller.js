const productosController = {}

const Producto =  require('../models/Producto')

productosController.getProductos = async (req, res) => {
    const productos = await Producto.find()
    res.json(productos)
}

productosController.createProducto = async (req, res) => {
    console.log(req.body)
    const nuevoProducto = new Producto(req.body)
    await nuevoProducto.save()
    res.send({message: 'Producto creado'})
}

productosController.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id)
    res.json(producto)
}

productosController.updateProducto = async (req, res) => {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body)
    res.send(producto)
}

productosController.deleteProducto = async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id)
    res.json({status: 'Producto eliminado' })
}

module.exports = productosController

