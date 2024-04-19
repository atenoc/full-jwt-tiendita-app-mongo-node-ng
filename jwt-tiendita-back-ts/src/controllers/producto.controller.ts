import { Request, Response } from 'express'
import Producto from '../models/Producto'
import path from 'path';
import fs from 'fs-extra'

export async function getProductos(req:Request,res:Response): Promise<Response> {
    //console.log("Obteniendo todas las fotos...")
    const producto = await Producto.find(); 
    return res.json(producto)
}

export async function getProducto(req:Request,res:Response): Promise<Response> {
    //console.log("Obteniendo 1 foto con id: "+req.params.id)
    const producto = await Producto.findById(req.params.id)
    return res.json(producto)
}

export async function createProducto(req:Request,res:Response): Promise<Response> {
    //console.log("Guardando foto...")
    const { nombre, descripcion, precio } = req.body;
    const newProducto = {
        nombre : nombre,
        descripcion : descripcion,
        precio : precio,
        imagenPath : req.file.path
    }

    const producto = new Producto(newProducto); //crea un nuevo documento para mongo DB
    await producto.save();

    return res.json({
        message:'Producto guardado',
        producto
    })
}

export async function deleteProducto(req:Request,res:Response): Promise<Response> {
    const { id } = req.params
    //console.log("Obteniendo 1 foto con id: "+ id)
    const producto = await Producto.findByIdAndRemove(id)

    if(producto){
        await fs.unlink(path.resolve(producto.imagenPath),function(response) {
            console.log("Error al eliminar Producto")
          });
    }

    return res.json({
        message:'Producto eliminado',
        producto
    })
}

export async function updateProducto(req:Request,res:Response): Promise<Response> {
    const { id } = req.params;
    const { titulo, descripcion, precio }= req.body;
    
    const producto = await Producto.findByIdAndUpdate(id, {
         titulo, descripcion, precio 
    }, {new: true});

    return res.json({
        message:'Producto actualizado',
        producto
    })
}