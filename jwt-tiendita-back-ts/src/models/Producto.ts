import { Schema, model, Document} from 'mongoose';

const schema = new Schema({
    nombre: String,
    descripcion: String,
    precio: String,
    imagenPath: String
},
  {
    versionKey: false,
    timestamps: true,
  }
)

interface IProducto extends Document{
    nombre: string;
    descripcion: string;
    precio: string;
    imagenPath: string;
}

export default model<IProducto>('Producto', schema);