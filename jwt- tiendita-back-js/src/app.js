//SERVER

const express = require('express')
const morgan = require('morgan') //moddleware
const cors = require('cors')

const app = express()


//environments variables
app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(express.json()) // conviete los datos que recibe el servidor a json 
app.use(express.urlencoded({ extended:true })) // entender informacion recibida de un formulario html
app.use(cors()) //

//app.use("/api", require('./routes/user'))
app.use("/api/auth", require('./routes/auth.routes'))
app.use("/api/productos", require('./routes/productos.routes'))

module.exports = app