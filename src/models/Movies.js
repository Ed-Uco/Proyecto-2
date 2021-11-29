// 1. Importaciones.

const mongoose = require("mongoose")

// 2. Schema 

const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    movieUrl: String
}, {timestamps: true})

// 3. Generación de modelo.

const Movie = mongoose.model("Movie", movieSchema)

// 4. Exportación

module.exports = Movie