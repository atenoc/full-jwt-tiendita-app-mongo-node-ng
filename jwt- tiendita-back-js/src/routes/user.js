const { Router } = require('express')
const router = Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.post('/registro', async (req,res) => {
    const {nombre, email, password} = req.body
    const newUser = new User ({ nombre, email, password })
    await newUser.save()
    // crear un token
    const token = jwt.sign({_id: newUser._id}, 'secretkey')
    //devolver el token al usuario
    res.status(200).json({token})
})

router.post('/login', async (req,res) => {

    const { email, password } =  req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(401).send("El correo no existe")
    if (user.password !== password) return res.status(401).send("La contraseña es incorrecta")

    const token = jwt.sign({_id: user._id}, 'secretkey')
    return res.status(200).json({token})

})

router.get('/publico', (req,res) => {
    res.json([
        {
            _id: 1,
            nombre: "Car"
        },
        {
            _id: 2,
            nombre: "Cara"
        }
    ])
})

router.get('/privado', verificarToken, (req,res) => {
    res.json([
        {
            _id: 1,
            nombre: "Car Privado"
        },
        {
            _id: 2,
            nombre: "Car Ateno"
        }
    ])
})

module.exports = router

function verificarToken(req, res, next){
    if (!req.headers.authorization){
        return res.status(401).send('Peticion no autorizada')    
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === null){
        return res.status(401).send('Peticion no autorizada') 
    }

    const payload = jwt.verify(token, 'secretkey')
    req.userId = payload._id;
    next()
}