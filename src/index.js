// 1. Importaciones
const express = require('express');
const app = express();
const hbs = require('hbs');
const connectDB = require("./config/db")


require('dotenv').config();
// 2. Middlewares
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.urlencoded({ extended: true }));

connectDB()

// 3. Rutas

app.use('/', require('./routes'));

// 4. Servidor 
app.listen(process.env.PORT, () => {
    console.log(
        `Servidor conectado en puerto http://localhost:${process.env.PORT}`,
    );
})
