"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Photo_1 = __importDefault(require("../models/Photo"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function getPhotos(req, res) {
    //console.log("Obteniendo todas las fotos...")
    const photos = await Photo_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
async function getPhoto(req, res) {
    //console.log("Obteniendo 1 foto con id: "+req.params.id)
    const photo = await Photo_1.default.findById(req.params.id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
async function createPhoto(req, res) {
    //console.log("Guardando foto...")
    const { nombre, descripcion } = req.body;
    const newPhoto = {
        nombre: nombre,
        descripcion: descripcion,
        imagenPath: req.file.path
    };
    const photo = new Photo_1.default(newPhoto); //crea un nuevo documento para mongo DB
    await photo.save();
    return res.json({
        message: 'Foto guardada',
        photo
    });
}
exports.createPhoto = createPhoto;
async function deletePhoto(req, res) {
    const { id } = req.params;
    //console.log("Obteniendo 1 foto con id: "+ id)
    const photo = await Photo_1.default.findByIdAndRemove(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagenPath), function (response) {
            console.log("error al eliminar foto");
        });
    }
    return res.json({
        message: 'Foto eliminada',
        photo
    });
}
exports.deletePhoto = deletePhoto;
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const photo = await Photo_1.default.findByIdAndUpdate(id, {
        titulo, descripcion
    }, { new: true });
    return res.json({
        message: 'Foto actualizada',
        photo
    });
}
exports.updatePhoto = updatePhoto;
