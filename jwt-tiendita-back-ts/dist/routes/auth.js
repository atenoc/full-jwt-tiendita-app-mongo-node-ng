"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
//const valida = require('../controllers/verificarToken')
const auth_controller_1 = require("../controllers/auth.controller");
//router.route('/registro').post(createUser);
//router.route('/login').post(login);
router.post('/registro', auth_controller_1.createUser);
router.post('/login', auth_controller_1.login);
exports.default = router;
