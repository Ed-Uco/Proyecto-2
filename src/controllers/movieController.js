// 1. Importación del modelo.

const Movie = require("./../models/Movies")

exports.getAllMovies = async (req, res) => {
    const allMovies = await Movie.find({})

    res.render("movies/list", {
        data: allMovies
    })
}

// Búsqueda de película por ID.

exports.getMovie = async (req, res) => {
    const singleMovieID = req.params.movieID
    const getTheMovie = await Movie.findById(singleMovieID)

    res.render("movies/single", {
        data:getTheMovie
    })
}

// Vista de formulario para crear una película.
exports.viewCreateMovie = async (req, res) => {
    res.render("movies/create")
}

// Crear una película
exports.createMovie = async (req, res) => {
    
    console.log (req.body)

    const title = req.body.title
    const director = req.body.director
    const stars = req.body.stars
    const image = req.body.image
    const year = req.body.year
    const description = req.body.description
    const movieUrl = req.body.movieUrl

    const newMovieCreated = await Movie.create({title, director, stars, image, year, description, movieUrl})

    console.log(newMovieCreated)

    res.redirect("/movies")

    console.log("Datos recibidos")

}

// Editar una película
exports.viewEditMovie = async (req, res) => {
    console.log(req.params)

    const movieID = req.params.movieID
    const foundMovie = await Movie.findById(movieID)

    console.log(foundMovie)

    res.render("movies/edit", {
        data: foundMovie
    })
}

exports.editMovie = async (req,res) => {

    const movieID = req.params.movieID

    const title = req.body.title
    const director = req.body.director
    const stars = req.body.stars
    const image = req.body.image
    const year = req.body.year
    const description = req.body.description
    const movieUrl = req.body.movieUrl

    console.log(movieID)
    console.log(title, director, stars, image, year, description, movieUrl)

    const updatedMovie = await Movie.findByIdAndUpdate(
        movieID,
        {title, director, stars, image, year, description, movieUrl},
        {new:true})

    console.log(updatedMovie)

    res.redirect(`/movies/${updatedMovie._id}`)

}