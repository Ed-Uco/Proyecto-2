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
        movieUrl: "https://youtu.be/0WVDKZJkGlY"
    }, 
    {
        title: "Captain America: The First Avenger",
        director: "Joe Johnston",
        stars: ["Chis Evans", "Hayley Atwell", "Sebastian Stan", "Tommy Lee Jones", "Hugo Weaving", "Dominic Cooper", "Richard Armitage", "Stanley Tucci", "Samuel L. Jackson", "Toby Jones", "Neal McDonough", "Kenneth Choi"],
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e6/El_Primer_Vengador_Poster_5.png/revision/latest?cb=20151224142624&path-prefix=es",
        description: "It is 1942, America has entered World War II, and sickly but determined Steve Rogers is frustrated at being rejected yet again for military service. Everything changes when Dr. Erskine recruits him for the secret Project Rebirth. Proving his extraordinary courage, wits and conscience, Rogers undergoes the experiment and his weak body is suddenly enhanced into the maximum human potential. When Dr. Erskine is then immediately assassinated by an agent of Nazi Germany's secret HYDRA research department (headed by Johann Schmidt, a.k.a. the Red Skull), Rogers is left as a unique man who is initially misused as a propaganda mascot; however, when his comrades need him, Rogers goes on a successful adventure that truly makes him Captain America, and his war against Schmidt begins.",
        movieUrl: "https://youtu.be/JerVrbLldXw"
    },
    {
        title: "Captain Marvel",
        director: "Anna Boden",
        stars: ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn", "Jude Law", "Annette Bening", "Djimon Hounsou", "Lee Pace", "Lashana Lynch", "Gemma Chan", "Clark Gregg", "Rune Temte", "Mckenna Grace"], 
        image: "https://m.media-amazon.com/images/I/91VwaglLKpL._AC_SY679_.jpg",
        description: "After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls, Danvers begins to discover there's more to her past. With help from S.H.I.E.L.D. agent Nick Fury, they set out to unravel the truth.",
        movieUrl: "https://youtu.be/Z1BCujX3pw8"
    },
    {
        title: "Iron Man",
        director: "Jon Favreau", 
        stars: ["Robert Downey Jr.", "Terrence Howard", "Jeff Bridges", "Gwyneth Paltrow", "Leslie Bibb", "Shaun Toub", "Shaun Toub", "Clark Gregg", "Bill Smitrovich", "Sayed Badreya", "Paul Bettany", "Paul Bettany"], 
        image: "https://m.media-amazon.com/images/I/61h3QYQmxeL._AC_SY679_.jpg",
        description: "Playboy and visionary industrial genius Tony Stark, CEO of leading military defense contractor, Stark Industries, is in war-torn Kunar, Afghanistan, to demonstrate his company's new Jericho missile. With him is his friend and military liaison, Lieutenant Colonel James Rhodes, a member of the U.S. Air Force.",
        movieUrl: "https://youtu.be/KAE5ymVLmZg"
    },
    {
        title: "The Incredible Hulk",
        director: "Louis Leterrier",
        stars: ["Edward Norton", "Liv Tyler", "Tim Roth", "William Hurt", "Tim Blake Nelson", "Ty Burrell", "Christina Cabot"],
        image: "https://m.media-amazon.com/images/I/61ikONHVOAL._AC_SY679_.jpg", 
        description: "After surviving a deadly gamma radiation accident, scientist Bruce Banner travels the world in search for a cure to his inner force of rage that turns him into a massive green monster known as the Hulk. Though he is close, Banner must watch out because the malevolent General Ross and his team are searching for him and want to use his condition for military weaponry. Running out of time and options, Banner turns to his old flame Betty Ross for help. Meanwhile, a new threat rises as a power hungry soldier turns into a deadlier and more terrifying beast that can match even the Hulk's powers.",
        movieUrl: "https://youtu.be/rExil-4VDSA"
    },
    {
        title: "Iron Man 2",
        director: "Jon Favreau",
        stars: ["Robert Downey Jr,", "Gwyneth Paltrow", "Don Cheadle", "Scarlett Johansson", "Sam Rockwell", "Mickey Rourke", "Samuel L. Jackson", "Clark Gregg", "John Slattery", "Garry Shandling", "Paul Bettany", "Kate Mara", "Leslie Bibb", "Jon Favreau"],
        description: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
        movieUrl: "https://youtu.be/wKtcmiifycU"
    },
]