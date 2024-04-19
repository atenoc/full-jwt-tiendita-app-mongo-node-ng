"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function startConnectionDB() {
    //await connect('mongodb://localhost/tiendita_app',{
    await mongoose_1.connect('mongodb+srv://Gorichelas2021:M3YU0rfFskSgMQZp@cluster0.n6ic6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Database conected: tiendita_app');
}
exports.startConnectionDB = startConnectionDB;
