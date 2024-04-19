
const mongoose = require("mongoose");
const { Schema } = mongoose;

const productoSchema = new Schema(
  {
    nombre: {type: String, required: true},
    descripcion: {type: String, required: false},
    precio: {type: String, required:true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Producto", productoSchema);