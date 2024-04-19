const userController = {}

const User =  require('../models/User')
const jwt = require('jsonwebtoken')

userController.createRegistro = async (req, res) => {
    const {nombre, email, password} = req.body
    const newUser = new User ({ nombre, email, password })
    await newUser.save()
    const token = jwt.sign({_id: newUser._id}, 'secretkey') // crear un token
    res.status(200).json({token}) //devolver el token al usuario 
}

userController.postLogin = async (req, res) => {
    const { email, password } =  req.body
    console.log(req.body)
    const user = await User.findOne({ email })
    //if (!user) return res.status(401).send("El correo no existe")
    if (!user) return res.json({ message:'El correo no existe'})
    //if (user.password !== password) return res.status(401).send("La contraseña es incorrecta")
    if (user.password !== password) return res.json({ message:'La contraseña es incorrecta'})

    const token = jwt.sign({_id: user._id}, 'secretkey')
    return res.status(200).json({token})
}

module.exports = userController

