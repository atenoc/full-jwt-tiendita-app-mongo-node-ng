"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const jwt = require('jsonwebtoken');
async function createUser(req, res) {
    const { nombre, email, password } = req.body;
    const newUser = { nombre, email, password };
    const user = new User_1.default(newUser);
    await user.save();
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    //return res.json({ message:'Usuario creado', user })
    return res.status(200).json({ token });
}
exports.createUser = createUser;
async function login(req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User_1.default.findOne({ email });
    if (!user)
        return res.json({ message: 'El correo no existe' });
    if (user.password !== password)
        return res.json({ message: 'La contraseña es incorrecta' });
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    return res.status(200).json({ token });
}
exports.login = login;
