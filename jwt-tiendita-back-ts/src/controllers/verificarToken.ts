import { Request, Response, NextFunction } from 'express'

const jwt = require('jsonwebtoken')

function verificarToken(req:Request, res:Response, next:NextFunction){

    if (!req.headers.authorization){
        return res.status(401).send('Peticion no autorizada')    
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === null){
        return res.status(401).send('Peticion no autorizada') 
    }

    const payload = jwt.verify(token, 'secretkey')
    //req.userId = payload._id;
    next()
}

module.exports = { verificarToken };