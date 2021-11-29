// Importación

const mongoose = require("mongoose")
const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hptoy.mongodb.net/marvel`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log ("Base de datos conectada")
}

// Exportación

module.exports = connectDB