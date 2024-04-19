const { Router } = require('express')
const router = Router()

//const valida = require('../controllers/verificarToken')
const segController = require('../controllers/auth.controller.js')

router.post('/registro', segController.createRegistro)
router.post('/login', segController.postLogin)
//router.get('/admin', valida.verificarToken, segController.getRestringido)

module.exports = router
