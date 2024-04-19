import { connect } from 'mongoose';

export async function startConnectionDB(){
    await connect('mongodb://localhost/tiendita_app',{
    //await connect('mongodb+srv://Gorichelas2021:M3YU0rfFskSgMQZp@cluster0.n6ic6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{    
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useFindAndModify: false
    })

    console.log('Database conected: tiendita_app');
}

