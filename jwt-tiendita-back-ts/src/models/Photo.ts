import { Schema, model, Document} from 'mongoose';

const schema = new Schema({
    nombre: String,
    descripcion: String,
    imagenPath: String
})

interface IPhoto extends Document{
    nombre: string;
    descripcion: string;
    imagenPath: string;
}

export default model<IPhoto>('Photo', schema);