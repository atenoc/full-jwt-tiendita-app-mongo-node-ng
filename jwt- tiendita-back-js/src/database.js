const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/tiendita_app',{
    useUnifiedTopology:true,
    useNewUrlParser: true
})
.then((db) => console.log('Conectado a la BD: tiendita_app'))
.catch((err) => console.log(err))