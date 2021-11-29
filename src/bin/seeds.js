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

const movies = [
    {
        title: "Eternals",
        director: "Chloé Zhao",
        stars: ["Gemma Chan", "Richard Madden", "Angelina Jolie", "Salma Hayek", "Kumail Nanjiani", "Lia McHugh", "Brian Tyree Henry", "Lauren Ridloff", "Barry Keoghan", "Ma Dong-seok", "Harish Patel", "Bill Skarsgard", "Hazz Sleiman", "Esai Daniel Cross", "Harry Stiles"],
        image: "https://style.shockvisual.net/wp-content/uploads/2021/08/ETERNALS-POSTER.jpg", 
        description: "In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris, Kingo, Sprite, Phastos, Makkari, Druig, Gilgamesh, and Thena—are sent by the Celestial Arishem to Earth on their starship, the Domo, to exterminate the invasive Deviants. The last of the Deviants are killed in 1521, and the group's opinions differ over their continued responsibilities and their relationship with humankind. Over the next five hundred years, they mostly live apart from each other, awaiting Arishem's return.",
        movieUrl: "Pending"
    }
]