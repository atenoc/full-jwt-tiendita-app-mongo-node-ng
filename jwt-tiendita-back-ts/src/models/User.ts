import { Schema, model, Document} from 'mongoose';

const schema = new Schema({
    nombre: String,
    email: String,
    password: String
},
  {
    versionKey: false,
    timestamps: true,
  }
)

interface IUser extends Document{
    nombre: string;
    email: string;
    password: string;
}

export default model<IUser>('User', schema);