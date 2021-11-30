// 1. Importaciones.

const express = require("express")
const router = express.Router()

const movieController = require("./../controllers/movieController")

// 2. Manejo de ruteo con base URL.

router.get("/", movieController.getAllMovies)

router.get("/:movieID", movieController.getMovie)

// 3. Exportación

module.exports = router