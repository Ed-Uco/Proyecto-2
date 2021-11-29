// 1. Importaciones

const express = require("express")
const app = express()
const hbs = require("hbs")
const connectDB = require("./src/config/db")

require("dotenv").config()

// 2. Middlewares


connectDB()
// 3. Rutas

// 4. Servidor 
app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado en puerto http://localhost:${process.env.PORT}`)
})