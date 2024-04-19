const jwt = require('jsonwebtoken')

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

module.exports = { verificarToken };