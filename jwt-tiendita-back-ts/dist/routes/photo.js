"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const valida = require('../controllers/verificarToken');
const photo_controller_1 = require("../controllers/photo.controller");
const multer_1 = __importDefault(require("../libs/multer"));
//router.route('/').post(multer.single('image'), createPhoto).get(getPhotos);
//router.route('/:id').get(getPhoto).delete(deletePhoto).put(updatePhoto);
router.post('/', valida.verificarToken, multer_1.default.single('image'), photo_controller_1.createPhoto);
router.get('/', valida.verificarToken, photo_controller_1.getPhotos);
router.get('/:id', valida.verificarToken, photo_controller_1.getPhoto);
router.get('/:id', valida.verificarToken, photo_controller_1.deletePhoto);
router.get('/:id', valida.verificarToken, photo_controller_1.updatePhoto);
exports.default = router;
