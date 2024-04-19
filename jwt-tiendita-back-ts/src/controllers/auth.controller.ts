import { Request, Response } from 'express'
import User from '../models/User'

const jwt = require('jsonwebtoken')

export async function createUser(req:Request, res:Response): Promise<Response> {

    const { nombre, email, password } = req.body;
    const newUser = { nombre, email, password }
    const user = new User(newUser); 
    await user.save();
    const token = jwt.sign({_id: user._id}, 'secretkey')

    //return res.json({ message:'Usuario creado', user })
    return res.status(200).json({token})
}

export async function login(req:Request,res:Response): Promise<Response> {

    const { email, password } =  req.body
    console.log(req.body)
    const user = await User.findOne({ email })
    if (!user) return res.json({ message:'El correo no existe'})
    if (user.password !== password) return res.json({ message:'La contraseña es incorrecta'})

    const token = jwt.sign({_id: user._id}, 'secretkey')
    return res.status(200).json({token})
}



