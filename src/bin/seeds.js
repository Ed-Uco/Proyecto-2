// 1. Importaciones

const mongoose = require("mongoose")
const Movie = require("./../models/Movies")

require("dotenv").config()

// 2. Conexión a base de datos

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hptoy.mongodb.net/marvel`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 3. Datos a poblar.

const movies