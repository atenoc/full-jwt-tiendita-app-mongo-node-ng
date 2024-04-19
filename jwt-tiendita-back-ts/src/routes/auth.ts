import { Router }  from 'express';

const router = Router();
//const valida = require('../controllers/verificarToken')

import { createUser, login} from '../controllers/auth.controller'

//router.route('/registro').post(createUser);
//router.route('/login').post(login);

router.post('/registro',  createUser)
router.post('/login', login) 


export default router;