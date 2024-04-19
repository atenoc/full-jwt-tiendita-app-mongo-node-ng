import { Router }  from 'express';

const router = Router();
const valida = require('../controllers/verificarToken')

import { getPhotos, getPhoto, createPhoto, deletePhoto, updatePhoto } from '../controllers/photo.controller'
import multer from '../libs/multer'

//router.route('/').post(multer.single('image'), createPhoto).get(getPhotos);
//router.route('/:id').get(getPhoto).delete(deletePhoto).put(updatePhoto);

router.post('/', valida.verificarToken, multer.single('image'), createPhoto)
router.get('/', valida.verificarToken, getPhotos)
router.get('/:id', valida.verificarToken, getPhoto)
router.get('/:id', valida.verificarToken, deletePhoto)
router.get('/:id', valida.verificarToken, updatePhoto)

export default router;